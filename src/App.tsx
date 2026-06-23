import { Route, Routes } from "react-router";
import Layout from "@/components/Layout";
import HomePage from "@/pages/Home";
import AboutPage from "@/pages/About";
import WhoWeServePage from "@/pages/WhoWeServe";
import ServicesPage from "@/pages/Services";
import FAQPage from "@/pages/FAQ";
import ContactPage from "@/pages/Contact";
import NotFoundPage from "@/pages/NotFound";
import BuyerPage from "@/templates/BuyerPage";
import ServicePage from "@/templates/ServicePage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/who-we-serve" element={<WhoWeServePage />} />
        <Route path="/who-we-serve/:slug" element={<BuyerPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/faqs" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
