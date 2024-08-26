import { useState, useEffect, useCallback } from "react";
import "../../styles/card-my-profile.css";

const FollowButton = ({ userId }) => {
    const [isFollowing, setIsFollowing] = useState(false)
    useEffect(() => {
        async function fetchFollowStatus() {
            const res = await fetch(`${process.env.BACKEND_URL}/api/follow-status/${userId}`)
            const data = await res.json()
            setIsFollowing(data.follow_status)
        }
        fetchFollowStatus()
    }, [userId])
    const handleFollowToggle = useCallback(async () => {
        const action = isFollowing ? "unfollow" : "follow";
        const res = await fetch(`${process.env.BACKEND_URL}/api/${action}/${userId}`, { method: 'POST' })
        if (!res.ok) {
            console.error('failed to toggle followstatus')
        }
        setIsFollowing(!isFollowing)

    }, [isFollowing, userId])

    return (
        <button onClick={handleFollowToggle} class="btn edit-profile">
            {isFollowing ? "UNFOLLOW" : "FOLLOW"}
        </button>
    )
}


export default FollowButton