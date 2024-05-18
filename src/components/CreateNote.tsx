import React, { useState, useEffect } from "react";
import { Label } from "@radix-ui/react-label";
import { Separator } from "@/components/ui/separator";
import { SelectTag } from "./input/SelectTag";
import { Task } from "../types/shared";
import { TASK_INITIAL_STATE } from "../utils";

export const CreateNote = () => {
  const [tasks, setTasks] = useState<Task[]>(TASK_INITIAL_STATE);
  const [tag, setTag] = useState<number>();
  const [title, setTitle] = useState("");
  const [remainingTasks, setRemainingTasks] = useState(0);

  useEffect(() => {
    setRemainingTasks(
      tasks.filter((taskItem) => taskItem.done === false).length,
    );
  }, [tasks]);

  function changeStatus(id: number) {
    const tmp = [...tasks];
    const taskIndex = tmp.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      const task = { ...tmp[taskIndex] };
      task.done = !task.done;
      tmp[taskIndex] = task;
      setTasks(tmp);
    }
  }

  return (
    <>
      <form
        className="pointer flex flex-col"
        onSubmit={(e) => e.preventDefault()}
      >
        <SelectTag value={tag} onChange={(id) => setTag(id)} />
        <div>
          {tasks.length > 0 && remainingTasks === 0 ? (
            "All done"
          ) : (
            <>
              You have <b>{remainingTasks}</b> of <b>{tasks.length}</b> tasks
              remaining
            </>
          )}
        </div>
        <h1 className="mt-2 flex justify-center">Today I need to</h1>
        <div className="flex w-full flex-row justify-around">
          <input
            className="focus:outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add Task..."
          />
          <button
            className="h-[30px] w-[30px] shrink-0 rounded-[50%] text-3xl font-medium leading-none"
            onClick={() => {
              setTitle("");
              // handleAddTask();
            }}
            type="submit"
          >
            +
          </button>
        </div>
        <Separator />
        {tasks.map((task, index) => {
          return (
            <div className="m-2 flex items-center justify-between" key={index}>
              <div className="flex w-full">
                <input
                  onChange={() => changeStatus(task.id)}
                  type="checkbox"
                  className="peer relative mr-2 h-5 w-5 cursor-pointer appearance-none rounded-full border-2 border-gray-300 duration-300 before:absolute before:left-[4px] before:top-[1px] 
                  before:h-[12px] before:w-[7px] before:rotate-45 before:border-2 before:border-y-0 before:border-b-2 before:border-l-0 before:border-r-2 
                  before:border-white before:content-[''] checked:border-[#6bffa0] checked:bg-[#6bffa0] hover:border-gray-500 checked:hover:border-[#6bffa0]"
                />
                <Label
                  className={`flex w-full justify-between font-semibold ${task.done == true ? "text-slate-400 line-through" : "text-black"}`}
                >
                  {task.title}
                  <div className="pointer duration-300 hover:text-red-500">
                    <button
                      className="rounded-full opacity-0 hover:opacity-100"
                      // onClick={() => handleDeleteTask(task.id)}
                    >
                      <svg
                        height="21"
                        viewBox="0 0 21 21"
                        width="21"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          fill="none"
                          fill-rule="evenodd"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          transform="translate(5 5)"
                        >
                          <path d="m10.5 10.5-10-10z" />
                          <path d="m10.5.5-10 10" />
                        </g>
                      </svg>
                    </button>
                  </div>
                </Label>
              </div>
            </div>
          );
        })}
      </form>
    </>
  );
};
