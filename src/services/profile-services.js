import { storage, firestore } from "../../firebase.v8";

export const getProfilePictureURL = (profilePicturePath) => {
    const usersStorageRef = storage.ref(`images/users/${profilePicturePath}`)

    return usersStorageRef.getDownloadURL()
        .catch(error => {
            if (error.code === "storage/object-not-found") {
                return null
            }
            console.error(error)
        })
}

export const getUsername = (userId) => {
    return firestore
        .collection("users")
        .doc(userId)
        .get()
        .then(querySnapshot => {
            return querySnapshot.data()?.username
        })
}