import { lazy, Suspense, useEffect, useState } from "react"
import { Route, Routes, useLocation } from "react-router-dom"



const Landing = lazy(() => import("./Pages/Landing.tsx"))
const Loader = lazy(() => import("./Components/Common/Loader.tsx"))
const Header = lazy(() => import("./Components/Common/Header.tsx"))
const Footer = lazy(() => import("./Components/Common/Footer.tsx"))
const Contact = lazy(() => import("./Pages/Contact.tsx"))
const UserProfile = lazy(() => import("./Pages/UserProfile.tsx"))
const EmployerList = lazy(() => import("./Pages/EmployerList.tsx"))
const EmployerDeatils = lazy(() => import("./Pages/EmployerDeatils.tsx"))
const Settings = lazy(() => import("./Pages/Settings.tsx"))
const NotFound = lazy(() => import("./Pages/NotFound.tsx"))
const Auth = lazy(() => import("./Pages/Auth.tsx"))
const JobFilter = lazy(() => import("./Pages/JobFilter.tsx"))
const JobDeatils = lazy(() => import("./Pages/JobDeatils.tsx"))




function App() {

  // To get the current path
  const location = useLocation()


  // To hide the header and footer
  const [Hide, SetHide] = useState(false)


  // To hide the header and footer
  useEffect(() => {

    if (location.pathname === "/auth") {
      SetHide(true)
    }
    else {

      SetHide(false)

    }

  }, [location])



  return (


    <>



      <Suspense fallback={<Loader />}>

        {!Hide && <Header />}

        <Routes>

          <Route path="/" element={<Landing />} />

          <Route path="*" element={<NotFound />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/userprofile" element={<UserProfile />} />

          <Route path="/employerlist" element={<EmployerList />} />

          <Route path="/employerdeatils" element={<EmployerDeatils />} />

          <Route path="/settings" element={<Settings />} />

          <Route path="/auth" element={<Auth />} />

          <Route path="/jobfilter" element={<JobFilter />} />

          <Route path="/jobdeatils" element={<JobDeatils />} />


        </Routes>

        {!Hide && <Footer />}

      </Suspense>




    </>




  )



}

export default App