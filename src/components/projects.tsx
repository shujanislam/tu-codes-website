"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

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

  const handleSubmit = () => {
    const payload = {
      projectName: projectName.trim(),
      projectDescription: projectDescription.trim(),
      imageUrl: imageUrl.trim(),
    };
    console.log("CREATE_PROJECT_PAYLOAD:", payload);
  };

  return (
    <div className="w-full max-w-xl bg-card border border-border rounded-2xl p-6 space-y-5">
      <div>
        <h2 className="text-xl font-semibold text-foreground">Create Project</h2>
        <p className="text-sm text-muted-foreground">Enter details and click submit to log them.</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="project-name">Project Name</Label>
        <Input
          id="project-name"
          placeholder="e.g., Virtual Lab Simulator"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="project-description">Project Description</Label>
        <Input
          id="project-description"
          placeholder="Short description..."
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="project-image">Image URL</Label>
        <Input
          id="project-image"
          placeholder="https://..."
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        {imageUrlError ? <p className="text-sm text-red-600">{imageUrlError}</p> : null}

        {!imageUrlError && imageUrl.trim() ? (
          <div className="mt-3 overflow-hidden rounded-xl border border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageUrl.trim()}
              alt="Project preview"
              className="w-full h-48 object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
        ) : null}
      </div>

      <Button type="button" className="w-full bg-black" disabled={!canSubmit} onClick={handleSubmit}>
        Submit (console.log)
      </Button>
    </div>
  );
}
