import { db, questionCollection } from "@/models";
import { databases } from "@/models/server/config";
import React from "react";
import EditQues from "./EditQues";

const Page = async ({
  params,
}: {
  params: { quesId: string; quesName: string };
}) => {
  try {
    const question = await databases.getDocument(
      db,
      questionCollection,
      params.quesId
    );

    return <EditQues question={question} />;
  } catch (error) {
    console.error("Error fetching question:", error);
    return <div>Error loading question</div>;
  }
};

export default Page;
