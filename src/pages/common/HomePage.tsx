import React, { lazy, Suspense, useMemo } from "react";
import { colors } from "../../constants/colors";

import { categories, categoryList, keywords } from "../../data";
import CarouselComponent from "../../components/Layout/CarouselComponent";
import CategoryTitle from "../../components/Layout/CategoryTitle";
import CategoryLinks from "../../components/Layout/CategoryLinks";
import JobList from "../../components/Layout/JobList";
import Header from "../../components/Layout/HeaderComponent/Header";
import { KeywordList, SearchComponent } from "../../components/";
import { Skeleton } from "antd";
import PlantaholicBanner from "../../components/Layout/PlantaholicBanner";
import NewsletterBanner from "../../components/Layout/NewsletterBanner";

// Lazy load các component

const HeaderComponent = lazy(
  () => import("../../components/Layout/HeaderComponent/HeaderComponent")
);
const BenefitComponent = lazy(
  () => import("../../components/Layout/BenefitComponent")
);
const AdvsComponent = lazy(
  () => import("../../components/Layout/AdvsComponent")
);
const FooterComponent = lazy(
  () => import("../../components/Layout/FooterComponent/FooterComponent")
);

const HomePage: React.FC = () => {
  const carouselImages = [
    "/assets/images/banner.png",
    "/assets/images/banner.png",
    "/assets/images/banner.png",
  ];

  // Memoize các component tĩnh
  const memoizedCategoryList = useMemo(() => categoryList, []);
  const memoizedCategories = useMemo(() => categories, []);

  return (
    <div className="font-sans  bg-[#F3F5F7]">
      <Suspense fallback={<Skeleton active paragraph={{ rows: 1 }} />}>
        <Header />
        <PlantaholicBanner />
      </Suspense>

      <div>
        <div className=" mt-2 text-primary  px-5 bg-[#F3F5F7] pb-5">
          <div className="flex justify-center">
            <SearchComponent />
          </div>
          <CategoryTitle title="Danh mục nổi bật" />
          <CategoryLinks links={memoizedCategoryList} />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {memoizedCategories.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg"
              >
                <img
                  src={item.iconUrl}
                  alt={item.category}
                  className="w-16 h-16 mb-3"
                />
                <h4 className="text-lg font-semibold">{item.category}</h4>
                <p className="text-sm text-gray-600">{item.jobs} Công việc</p>
              </div>
            ))}
          </div>
        </div>

        <JobList />

        {/* BenefitComponent với Skeleton */}
        <Suspense fallback={<Skeleton active paragraph={{ rows: 2 }} />}>
          <BenefitComponent />
        </Suspense>

        {/* AdvsComponent với Skeleton */}
        <Suspense fallback={<Skeleton active paragraph={{ rows: 3 }} />}>
          <NewsletterBanner />
          <KeywordList keywords={keywords} />
        </Suspense>
      </div>

      <footer>
        {/* FooterComponent với Skeleton */}
        <Suspense fallback={<Skeleton active paragraph={{ rows: 4 }} />}>
          <FooterComponent />
        </Suspense>
      </footer>
    </div>
  );
};

export default React.memo(HomePage);
