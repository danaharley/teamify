import { auth } from "@clerk/nextjs";
import { startCase } from "lodash";

import { OrgControl } from "./_components/org-control";

export const generateMetadata = async () => {
  const { orgSlug } = auth();

  return {
    title: startCase(orgSlug || "organization"),
  };
};

const OrganizationIdLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
};

export default OrganizationIdLayout;
