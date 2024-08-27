import React, { useState, useEffect, useCallback } from "react";

const FollowCounter = ({ userId, followerCount, setFollowerCount }) => {

    // const [followerCount, setFollowerCount] = useState(0);
    const token = localStorage.getItem("token")

    useEffect(() => {
        async function fetchFollowerCount() {
            try {
                const res = await fetch(`${process.env.BACKEND_URL}/api/follower-count/${userId}`, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });

                if (res.ok) {
                    const data = await res.json();
                    setFollowerCount(data.follower_count);
                    console.log(data);
                    
                } else {
                    const errorData = await res.json();
                    console.error('Error fetching follower count:', errorData.error);
                }
            } catch (error) {
                console.error('An unexpected error occurred:', error);
            }
        }
        fetchFollowerCount();
        // const intervalId = setInterval(fetchFollowerCount, 500);
        // return () => clearInterval(intervalId);
    }, [userId, token, followerCount]);



    return (
        <div className="fs-1">
            {followerCount}
        </div>
    );
}

export default FollowCounter;