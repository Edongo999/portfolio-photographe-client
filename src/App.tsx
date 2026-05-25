import React from "react";
import Layout from "@/components/layout/Layout";
import Home from "@/components/pages/HomePages";
import WhatsAppFloatingButton from "@/components/ui/WhatsAppFloatingButton";
import AlertModal from "@/components/ui/AlertModal";

// Import du module Analytics
import { Analytics } from "@vercel/analytics/react";

function App() {
  const showLock = false; 

  return (
    <Layout>
      <Home /> 
      <WhatsAppFloatingButton />
      <AlertModal show={showLock} /> 

      {/*  Composant Analytics placé  */}
      <Analytics />
    </Layout>
  );
}

export default App;
