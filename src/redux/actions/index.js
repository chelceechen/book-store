import {
  DELETE_BOOK,
  ADD_BOOK,
  EDIT_BOOK,
  GET_BOOK_LIST,
} from "../constants/actionTypes";
import { db } from "../../firebase";
import {
  doc,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  Timestamp,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";

export const addBook = (bookData) => {
  return async (dispatch) => {
    try {
      const docRef = await addDoc(collection(db, "bookList"), {
        ...bookData,
        createdAt: Timestamp.now(),
      });

      dispatch(getBookList());
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
};

export const getBookList = () => {
  return async (dispatch) => {
    try {
      const list = [];

      const querySnapshot = await getDocs(
        query(collection(db, "bookList"), orderBy("createdAt", "desc"))
      );
      querySnapshot.forEach((doc) => {
        list.push({
          ...doc.data(),
          docId: doc.id,
        });
      });
      if (!querySnapshot.empty) {
        dispatch({ type: GET_BOOK_LIST, payload: list });
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
};

export const editBook = (bookData) => {
  return async (dispatch) => {
    try {
      const ref = doc(db, "bookList", bookData.docId);
      await updateDoc(ref, {
        id: bookData.id,
        coverImg: bookData.coverImg,
        title: bookData.title,
        author: bookData.author,
        price: bookData.price,
        category: bookData.category,
        description: bookData.description,
      });

      dispatch(getBookList());
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
};

export const deleteBook = (bookData) => {
  return async (dispatch) => {
    try {
      const ref = doc(db, "bookList", bookData.docId);
      await deleteDoc(ref);
      dispatch(getBookList());
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
};
