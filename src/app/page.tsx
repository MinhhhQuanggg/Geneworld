"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingAssistant } from "@/components/layout/FloatingAssistant";

import { Hero } from "@/components/sections/Hero";
import { StatsIntro } from "@/components/sections/StatsIntro";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { Technologies } from "@/components/sections/Technologies";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { Manufacturing } from "@/components/sections/Manufacturing";
import { B2BPartner } from "@/components/sections/B2BPartner";
import { Knowledge } from "@/components/sections/Knowledge";

import { AboutPage } from "@/components/pages/AboutPage";
import { ProductsPage } from "@/components/pages/ProductsPage";

import { ShopModal } from "@/components/modals/ShopModal";
import { B2BModal } from "@/components/modals/B2BModal";
import { ProductModal } from "@/components/modals/ProductModal";
import { ProductItem } from "@/data/geneworldData";

export default function Home() {
  const [currentTab, setCurrentTab] = useState("home");
  const [isB2BOpen, setIsB2BOpen] = useState(false);
  const [b2bInquiryType, setB2BInquiryType] = useState("oem-odm");
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [selectedProductName, setSelectedProductName] = useState<string | undefined>(undefined);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const handleOpenB2B = (type: string = "oem-odm") => {
    setB2BInquiryType(type);
    setIsB2BOpen(true);
  };

  const handleOpenShop = (productName?: string) => {
    setSelectedProductName(productName);
    setIsShopOpen(true);
  };

  const handleSelectProduct = (product: ProductItem) => {
    setSelectedProduct(product);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F8F6] text-gw-charcoal selection:bg-gw-teal/20 selection:text-gw-deep">
      {/* Top Navigation */}
      <Navbar
        currentTab={currentTab}
        onNavigate={(tab) => setCurrentTab(tab)}
        onOpenB2B={() => handleOpenB2B("oem-odm")}
        onOpenShop={() => handleOpenShop()}
      />

      {/* Main Content Body */}
      <main className="flex-1">
        {currentTab === "home" && (
          <>
            <Hero
              onNavigate={(tab) => setCurrentTab(tab)}
              onOpenB2B={() => handleOpenB2B("oem-odm")}
              onOpenShop={() => handleOpenShop()}
            />
            <StatsIntro
              onNavigate={(tab) => setCurrentTab(tab)}
              onOpenB2B={() => handleOpenB2B("oem-odm")}
              onOpenShop={() => handleOpenShop()}
            />
            <FeaturedProducts
              onSelectProduct={handleSelectProduct}
              onOpenShop={handleOpenShop}
              onOpenB2B={() => handleOpenB2B("medical")}
              onViewAllProducts={() => setCurrentTab("products")}
            />
            <Technologies onOpenB2B={() => handleOpenB2B("oem-odm")} />
            <Ecosystem onOpenB2B={() => handleOpenB2B("manufacturing")} />
          </>
        )}

        {currentTab === "about" && (
          <AboutPage
            onOpenB2B={() => handleOpenB2B("oem-odm")}
            onOpenShop={() => handleOpenShop()}
          />
        )}

        {currentTab === "products" && (
          <ProductsPage
            onSelectProduct={handleSelectProduct}
            onOpenShop={handleOpenShop}
            onOpenB2B={() => handleOpenB2B("medical")}
          />
        )}

        {currentTab === "technology" && (
          <div className="pt-20">
            <Technologies onOpenB2B={() => handleOpenB2B("oem-odm")} />
          </div>
        )}

        {currentTab === "ecosystem" && (
          <div className="pt-20">
            <Ecosystem onOpenB2B={() => handleOpenB2B("manufacturing")} />
          </div>
        )}

        {currentTab === "manufacturing" && (
          <div className="pt-20">
            <Manufacturing onOpenB2B={() => handleOpenB2B("manufacturing")} />
          </div>
        )}

        {currentTab === "knowledge" && (
          <div className="pt-20">
            <Knowledge />
          </div>
        )}

        {currentTab === "b2b-partner" && (
          <div className="pt-28 pb-20 max-w-4xl mx-auto px-4">
            <B2BPartner onOpenB2B={handleOpenB2B} />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        onOpenB2B={() => handleOpenB2B("oem-odm")}
        onOpenShop={() => handleOpenShop()}
      />

      {/* Modals & Floating Assistant */}
      <ShopModal
        isOpen={isShopOpen}
        onClose={() => setIsShopOpen(false)}
        productName={selectedProductName}
        onOpenConsultation={() => handleOpenB2B("other")}
      />

      <B2BModal
        isOpen={isB2BOpen}
        onClose={() => setIsB2BOpen(false)}
        initialInquiryType={b2bInquiryType}
      />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenShop={handleOpenShop}
        onOpenB2B={() => handleOpenB2B("medical")}
      />

      <FloatingAssistant
        onNavigate={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        onOpenB2B={handleOpenB2B}
        onOpenShop={() => handleOpenShop()}
      />
    </div>
  );
}
