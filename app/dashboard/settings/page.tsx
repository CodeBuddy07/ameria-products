"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const tabs = ["Privacy Policy", "Terms & Condition"];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [content, setContent] = useState([
    "<p>Edit your <b>Privacy Policy</b> here.</p>",
    "<p>Edit your <b>Terms & Conditions</b> here.</p>",
  ]);

  const joditConfig = {
    readonly: false,
    height: 400,
    toolbarAdaptive: false,
    toolbarSticky: false,
    showCharsCounter: false,
    showWordsCounter: false,
    showXPathInStatusbar: false,
    buttons: [
      "font", "fontsize", "bold", "italic", "underline", "|",
      "ul", "ol", "|",
      "align", "outdent", "indent", "|",
      "undo", "redo"
    ],
    style: {
      font: [
        "Arial",
        "Verdana",
        "Georgia",
        "Times New Roman",
        "Courier New",
        "Tahoma",
        "Comic Sans MS",
        "Impact"
      ],
    },
  };


  const handleSave = () => {
    console.log(`${tabs[activeTab]} Data`, content[activeTab]);
    toast.success("Changes saved successfully!");
  };

  return (
    <div className="mx-auto bg-white border rounded-xl p-6">
      {/* Tabs */}
      <div className="flex border-b mb-4">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`px-4 py-2 text-sm font-medium border-b-2 ${activeTab === idx
                ? "border-black text-black"
                : "border-transparent text-gray-500 hover:text-black"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Title and Date */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold">{tabs[activeTab]}</h2>
        <p className="text-sm text-muted-foreground">Dec 4, 2019 21:42</p>
      </div>

      {/* Editor */}
      <div className="rounded-md border">
        <JoditEditor
          value={content[activeTab]}
          config={joditConfig}
          onBlur={(newContent) => {
            const updated = [...content];
            updated[activeTab] = newContent;
            setContent(updated);
          }}
        />
      </div>

      {/* Save Button */}
      <div className="mt-6">
        <Button
          onClick={handleSave}
          className="w-full bg-[#08692C] hover:bg-green-700 text-white"
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
}