
import Dashboard from "@/Components/User/Dashboard";
import Header from "@/Components/User/Header";

import Sidebar from "@/Components/User/Sidebar";
import { Credits, History, InstantTest, Profile, Settings } from "@/Components/User/User";
import { auth, db } from "@/db/firebase";
import { doc, getDoc } from "firebase/firestore";

import React, { useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [data, setData] = useState({});
  const [sideNavActive, setSideNavActive] = useState("Dashboard");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const documentRef = doc(db, "users", user.uid);
        try {
          const documentSnapshot = await getDoc(documentRef);
          if (documentSnapshot.exists()) {
            const fetchedData = documentSnapshot.data();
            setData(fetchedData);
          } else {
            console.log("Document not found");
          }
        } catch (error) {
          console.error("Error fetching document:", error);
        } finally {
          setIsLoading(false);
        }
      } else {
        console.log("User not authenticated");
        setIsLoading(false);
      }
    };

    // Fetch user data when the component mounts
    fetchUserData();
  }, [user]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <p>User not authenticated</p>;
  }

  // Now you can access the authenticated user
  console.log("Authenticated user:", user.uid, user.photoURL);

  const handleMainView = (sideNavActive) => {
    if (sideNavActive === "Dashboard") {
      return <Dashboard data={data} />;
    } else if (sideNavActive === "Profile") {
      return <Profile />;
    } else if (sideNavActive === "History") {
      return <History />;
    } else if (sideNavActive === "Credits") {
      return <Credits />;
    }else if (sideNavActive === "Settings") {
      return <Settings />;
    }else if (sideNavActive === "InstantTest") {
      return <InstantTest />;
    }
  };

  return (
    <>
      <Header photoUrl={user.photoURL} sideNavActive={sideNavActive} setSideNavActive={setSideNavActive} />
      <div
        className="background h-screen pt-[75px] bg-white p-8 grid grid-cols-[3fr,9fr] gap-4 overflow-hidden"
        style={{ height: "calc(100vh)" }}
      >
        {/* Left Column */}
        <Scrollbars
          autoHide={true}
          autoHideTimeout={100}
          autoHideDuration={200}
          thumbMinSize={30}
          universal={true}
        >
          <Sidebar
            displayName={user.displayName}
            sideNavActive={sideNavActive}
            setSideNavActive={setSideNavActive}
          />
        </Scrollbars>
        {/* right Column */}
        <Scrollbars
          style={{ height: "calc(80vh)" }}
          autoHide={true}
          autoHideTimeout={100}
          autoHideDuration={200}
          thumbMinSize={30}
          universal={true}
        >
          <div className="w-full">
            <div className="flex flex-col flex-1 w-full">
              <main className="h-full overflow-y-auto">
                {handleMainView(sideNavActive)}
              </main>
            </div>
          </div>
        </Scrollbars>
      </div>
    </>
  );
};

export default Home;
