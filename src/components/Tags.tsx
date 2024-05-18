import React, { useState } from "react";
import { Label } from "@radix-ui/react-label";

export const Tags = () => {
  const initialTags = [
    {
      activeTag: false,
      id: 1,
      title: "All",
      color: color(true),
    },
    {
      activeTag: false,
      id: 2,
      title: "Study",
      color: color(true),
    },
    {
      activeTag: false,
      id: 3,
      title: "Work",
      color: color(true),
    },
  ];
  const [activeTag, setActiveTag] = useState([...initialTags]);

  function color(bright: any) {
    let val;

    if (bright) {
      val = "hsl(" + Math.floor(Math.random() * 360) + ", 100%, 60%)";
    } else {
      val = "#";
      let chars = "1234567890ABCDEF".split("");
      for (let i = 0; i < 6; i++) {
        val += chars[Math.floor(Math.random() * chars.length)];
      }
    }
    return val;
  }

  const ChangeActiveTag = (id: number) => {
    const tags = [...initialTags];
    const tagIdx = tags.findIndex((tag) => tag.id === id);
    if (tagIdx !== -1) {
      const tag = tags[tagIdx];
      tag.activeTag = true;
      tags[tagIdx] = tag;
      setActiveTag(tags);
    }
  };

  const renderTags = () => {
    return activeTag.map((tag) => {
      let dotStyle = {
        background: tag.color,
      };
      let activeStyle = {
        boxShadow: "0 0 0 2px " + tag.color,
      };
      return (
        <button
          onClick={() => ChangeActiveTag(tag.id)}
          className="flex items-center rounded-full"
          key={tag.id}
          style={tag.activeTag === true ? activeStyle : {}}
        >
          <span
            style={dotStyle}
            className="ml-1 mr-3 flex h-[.75em] w-[.75em] items-center rounded-full pl-[10px]"
          ></span>
          {tag.title}
        </button>
      );
    });
  };
  return (
    <div className="flex flex-row items-center justify-around gap-4">
      <div>
        <Label className="text-gray-400">Tags</Label>
      </div>
      {renderTags()}
    </div>
  );
};
