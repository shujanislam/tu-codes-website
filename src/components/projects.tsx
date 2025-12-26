"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { createProject } from "../../lib/actions";

export default function CreateProjectCard() {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const imageUrlError = useMemo(() => {
    const v = imageUrl.trim();
    if (!v) return null;
    try {
      const u = new URL(v);
      if (!["http:", "https:"].includes(u.protocol)) return "URL must start with http or https";
      return null;
    } catch {
      return "Please enter a valid URL";
    }
  }, [imageUrl]);

  const canSubmit =
    projectName.trim().length > 0 &&
    projectDescription.trim().length > 0 &&
    !imageUrlError;

  const handleSubmit = async () => {
    try {
      const created = await createProject(
        projectName.trim(),
        projectDescription.trim(),
        imageUrl.trim()
      );
      console.log("CREATED PROJECT:", created);
    } catch (err: any) {
      console.log(err?.message ?? err);
    }
  };

  return (
    <div className="w-full max-w-xl bg-card border border-border rounded-2xl p-6 space-y-5">
      <div>
        <h2 className="text-xl font-semibold text-foreground">Create Project</h2>
      </div>

      <div className="space-y-2">
        <Label htmlFor="project-name">Project Name</Label>
        <Input
          id="project-name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="project-description">Project Description</Label>
        <Input
          id="project-description"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="project-image">Image URL</Label>
        <Input
          id="project-image"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        {imageUrlError ? <p className="text-sm text-red-600">{imageUrlError}</p> : null}
      </div>

      <Button type="button" className="w-full bg-black" disabled={!canSubmit} onClick={handleSubmit}>
        Create Project
      </Button>
    </div>
  );
}
