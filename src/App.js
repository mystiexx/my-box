import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./app/Add/Add";
import Chinese from "./app/Chinese/Chinese";
import Home from "./app/Home/Home";
import Korean from "./app/Korean/Korean";
import Thailand from "./app/Thailand/Thailand";
import app from "./firebase";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import Loader from "./components/loader/Loader";

const App = () => {
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(true);

  const getReviews = async () => {
    const db = getFirestore(app);
    try {
      await getDocs(collection(db, "reviews")).then((querySnapshot) => {
        // eslint-disable-next-line array-callback-return
        const documents = querySnapshot.docs.map((doc) => {
          if (doc.exists) {
            return { ...doc.data() };
          }
        });
        setReviews(documents);
        setLoading(false);
        console.log(documents);
      });
    } catch (err) {
      console.log(err.code);
    }
  };

  useEffect(() => {
    getReviews();
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home reviews={reviews} />} />
            <Route exact path="/add" element={<Add />} />
            <Route
              exact
              path="/thailand"
              element={<Thailand reviews={reviews} />}
            />
            <Route
              exact
              path="/chinese"
              element={<Chinese reviews={reviews} />}
            />
            <Route
              exact
              path="/korean"
              element={<Korean reviews={reviews} />}
            />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
