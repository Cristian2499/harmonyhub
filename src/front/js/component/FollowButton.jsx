import React, { useState, useEffect, useCallback } from "react";
import "../../styles/card-my-profile.css";

const FollowButton = ({ userId }) => {
    console.log(userId, "usuario")
    const [isFollowing, setIsFollowing] = useState(false);
    const token = localStorage.getItem("token");

    useEffect(() => {
        async function fetchFollowStatus() {
            try {
                const res = await fetch(`${process.env.BACKEND_URL}/api/follow-status/${userId}`, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });

                if (res.ok) {
                    const data = await res.json();
                    setIsFollowing(data.follow_status);
                } else {
                    const errorData = await res.json();
                    console.error('Error fetching follow status:', errorData.error);
                }
            } catch (error) {
                console.error('An unexpected error occurred:', error);
            }
        }
        fetchFollowStatus();
    }, [userId, token]);

    const handleFollowToggle = useCallback(async () => {
        const action = isFollowing ? "unfollow" : "follow";
        const method = isFollowing ? 'DELETE' : 'POST';

        try {
            console.log(localStorage.getItem("token"));
            
            const res = await fetch(`${process.env.BACKEND_URL}/api/${action}/${userId}`, { method, headers: { "Authorization": `Bearer ${token}` } });
            console.log(res)
            if (res.ok) {
                setIsFollowing(!isFollowing);
            } else {
                console.error(`Failed to ${action} user`);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }, [isFollowing, userId]);

    return (
        <button onClick={handleFollowToggle} className="btn edit-profile">
            {isFollowing ? "UNFOLLOW" : "FOLLOW"}
        </button>
    );
};

export default FollowButton;