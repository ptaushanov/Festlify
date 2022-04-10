import { storage, firestore } from "../../firebase.v8";

export const getProfilePictureURL = (userId) => {
    return firestore
        .collection("users")
        .doc(userId)
        .get()
        .then(querySnapshot => {
            return querySnapshot.data()?.avatar;
        })
}

export const getUsername = (userId) => {
    return firestore
        .collection("users")
        .doc(userId)
        .get()
        .then(querySnapshot => {
            return querySnapshot.data()?.username;
        })
}