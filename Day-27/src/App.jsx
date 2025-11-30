// import React from 'react'

import CardNav from "./components/Navbar"
// import SpotlightCard from "./components/BitCards"
import Card from "./components/Card";

function App() {

  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company" },
        { label: "Careers", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    }
  ];

  return (

    <>
      <main>
        <CardNav
          logo={'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_120x44dp.png'}
          logoAlt="Company Logo"
          items={items}
          baseColor="#fff"
          menuColor="#000"
          buttonBgColor="#111"
          buttonTextColor="#fff"
          ease="power3.out"
        />

        <div className="userCard">
          <Card
            img='https://i.pinimg.com/736x/48/ba/f7/48baf72eb07a924f085779453f9c9f62.jpg'
            user='Shiva Tripathi'
            role='Frontend Developer'
          />
          <Card
            img='https://i.pinimg.com/736x/48/ba/f7/48baf72eb07a924f085779453f9c9f62.jpg'
            user='kaushik Tripathi'
            role='Frontend Developer'
          />
          <Card
            img='https://i.pinimg.com/736x/48/ba/f7/48baf72eb07a924f085779453f9c9f62.jpg'
            user='Arnay Tripathi'
            role='Frontend Developer'
            // Testsupa17@17
          />
        </div>
        {/* <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
        <img src="https://i.pinimg.com/736x/5f/9c/1d/5f9c1d9d15167e0a59e6dad41e8556f9.jpg" alt="" />
      </SpotlightCard> */}
      </main>
    </>

  )
}

export default App