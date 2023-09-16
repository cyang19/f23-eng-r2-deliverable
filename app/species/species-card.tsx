"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Database } from "@/lib/schema";
import Image from "next/image";
import { useState } from "react";
type Species = Database["public"]["Tables"]["species"]["Row"];

export default function SpeciesCard(species: Species) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="min-w-72 m-4 w-72 flex-none rounded border-2 p-3 shadow">
      {species.image && (
        <div className="relative h-40 w-full">
          <Image src={species.image} alt={species.scientific_name} fill style={{ objectFit: "cover" }} />
        </div>
      )}
      <h3 className="mt-3 text-2xl font-semibold">{species.common_name}</h3>
      <h4 className="text-lg font-light italic">{species.scientific_name}</h4>
      <p>{species.description ? species.description.slice(0, 150).trim() + "..." : ""}</p>
      {/* Replace with detailed view */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="secondary" onClick={() => setOpen(true)}>
            <Icons.add className="mt-3 h-8 w-8" />
            Learn More
          </Button>
        </DialogTrigger>
        <DialogContent className="max-h-screen overflow-y-auto sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>
              {" "}
              <h3 className="mt-3 text-2xl font-semibold">{species.common_name}</h3>
            </DialogTitle>
            <DialogDescription>
              {" "}
              <h4 className="text-lg font-light ">
                <b className="font-semibold"> Scientific Name:</b> {species.scientific_name}
              </h4>
              <p className="text-lg font-light ">
                <b className="font-semibold"> Total Population: </b> {species.total_population}{" "}
                {/* how to check if this is null*/}
              </p>
              <p className="text-lg font-light ">
                <b className="font-semibold"> Kingdom: </b> {species.kingdom}
              </p>
              <p className="text-lg font-light ">
                <b className="font-semibold"> Description: </b> {species.description}
              </p>{" "}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
