// src/components/ClientWrapper.tsx
"use client"; // Mark this file as a Client Component

import React from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  // Define routes where the Header and Footer should not be rendered
  const noHeaderFooterRoutes = ["/login", "/signup", "/reset-password"];

  // Check if the current path is in the noHeaderFooterRoutes array
  const shouldRenderHeaderFooter = !noHeaderFooterRoutes.includes(pathname);

  return (
    <>
      {shouldRenderHeaderFooter && <Header />}
      {children}
      {shouldRenderHeaderFooter && <Footer />}
    </>
  );
};

export default ClientWrapper;
