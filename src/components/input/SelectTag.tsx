import React, { useState } from "react";
import { Label } from "@radix-ui/react-label";
import { Tag } from "@/src/types/shared";

type SelectTagProps = {
  value?: Tag["id"];
  onChange: (id: Tag["id"]) => void;
};

export const SelectTag = ({ value, onChange }: SelectTagProps) => {
  const tags: Tag[] = [
    {
      id: 1,
      label: "All",
      value: "all",
    },
    {
      id: 2,
      label: "Study",
      value: "study",
    },
    {
      id: 3,
      label: "Work",
      value: "work",
    },
  ];
  return (
    <div className="flex flex-row items-center justify-around gap-4">
      <div>
        <Label className="text-gray-400">Tags</Label>
      </div>
      {tags.map((tag) => {
        return (
          <button
            onClick={() => onChange(tag.id)}
            className={`flex items-center rounded-full ${value === tag.id && "border-2 border-purple-300"}`}
            key={tag.id}
          >
            <span className="ml-1 mr-3 flex h-[.75em] w-[.75em] items-center rounded-full bg-gray-200 pl-[10px]"></span>
            {tag.label}
          </button>
        );
      })}
    </div>
  );
};
