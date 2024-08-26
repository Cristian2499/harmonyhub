import React, { useState, useEffect, useCallback } from "react";

const FollowCounter =({userId}) =>{
    
    const [followerCount, setFollowerCount] = useState(0);
    const token = localStorage.getItem("token")

    useEffect (() => {
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
                } else {
                    const errorData = await res.json();
                    console.error('Error fetching follower count:', errorData.error);
                }
            } catch (error) {
                console.error('An unexpected error occurred:', error);
            }
        }
        fetchFollowerCount();
    }, [userId, token]);


    return (
        <div>
            {followerCount} FOLLOWERS
        </div>
    );
}

export default FollowCounter;