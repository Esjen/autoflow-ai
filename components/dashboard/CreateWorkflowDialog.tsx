"use client";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {
  onCreate: (workflow: {
    title: string;
    description: string;
    status: "Draft";
  }) => void;
}

export default function CreateWorkflowDialog({
  onCreate,
}: Props) {
  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleCreate() {
    if (!title.trim()) return;

    onCreate({
      title,
      description,
      status: "Draft",
    });

    setTitle("");
    setDescription("");

    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          + New Workflow
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Create Workflow
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-5">
          <div className="space-y-2">
            <Label>Workflow Name</Label>

            <Input
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              placeholder="AI Lead Qualification"
            />
          </div>

          <div className="space-y-2">
            <Label>Description</Label>

            <Input
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
              placeholder="Describe your workflow..."
            />
          </div>

          <Button
            onClick={handleCreate}
            className="w-full"
          >
            Create Workflow
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}