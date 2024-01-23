'use client';

import { Button } from "@/components/ui/button";
import { WarningOctagon } from "@phosphor-icons/react";
import { rejects } from "assert";
import { AlarmMinus, AlarmPlus, BellOff, BellRing, DatabaseBackup, Dot, PowerSquare } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [reboot, setReboot] = useState(false);
  const [alarmDeactivate, setAlarmDeactivate] = useState(false);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-[450px] flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <WarningOctagon className="w-20 h-20 text-red-500" />
          <h2 className="text-2xl font-bold">HomeAssistant Fehler</h2>
          <p className="text-neutral-400">Die Hausautomatisierung hat einen Fehler und läuft im Notmodus.</p>
        </div>
        <Separator/>
        <div className="w-full grid grid-cols-4 justify-center gap-2 text-center">
        <div className="flex flex-col items-center gap-2">
          <AlertDialog>
  <AlertDialogTrigger>         
     <div className="flex flex-col items-center gap-2">
            <Button variant="outline" size="icon" className="h-16 w-16 text-amber-500"><PowerOff className="w-8 h-8" /></Button>
            <p className="text-sm text-neutral-400">Neustart</p>
          </div>
          </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <div className="flex justify-center my-2">
          <PowerSquare className="w-8 h-8 text-amber-500" />
      </div>
      <AlertDialogTitle className="text-center">Neustart</AlertDialogTitle>
    </AlertDialogHeader>
    <div className="py-4">
      <Input 
        className="text-lg text-center"
          type="password"
          pattern="[0-9]*" 
          inputMode="numeric"
          max={4}
          placeholder="Code"
        />
    </div>

    <div className="flex justify-between">
      <Button size="lg" variant="destructive">Abbrechen</Button>
      <Button size="lg" className="bg-green-500 hover:bg-green-600">Ausführen</Button>
    </div>
  </AlertDialogContent>
</AlertDialog>
          </div>
          <div className="flex flex-col items-center gap-2">
          <AlertDialog>
  <AlertDialogTrigger>         
     <div className="flex flex-col items-center gap-2">
            <Button variant="outline" size="icon" className="h-16 w-16 text-amber-500"><PowerSquare className="w-8 h-8" /></Button>
            <p className="text-sm text-neutral-400">Neustart</p>
          </div>
          </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <div className="flex justify-center my-2">
          <PowerSquare className="w-8 h-8 text-amber-500" />
      </div>
      <AlertDialogTitle className="text-center">Neustart</AlertDialogTitle>
    </AlertDialogHeader>
    <div className="py-4">
      <Input 
        className="text-lg text-center"
          type="password"
          pattern="[0-9]*" 
          inputMode="numeric"
          max={4}
          placeholder="Code"
        />
    </div>

    <div className="flex justify-between">
      <Button size="lg" variant="destructive">Abbrechen</Button>
      <Button size="lg" className="bg-green-500 hover:bg-green-600">Ausführen</Button>
    </div>
  </AlertDialogContent>
</AlertDialog>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button variant="outline" size="icon" className="h-16 w-16 text-amber-500" onClick={() => {
              toast('hey')
            }} disabled={reboot}>
              <DatabaseBackup className="w-8 h-8" />
              </Button>
            <p className="text-sm text-neutral-400">Backup laden</p>
          </div>
          <AlertDialog>
  <AlertDialogTrigger>         
     <div className="flex flex-col items-center gap-2">
            <Button variant="outline" size="icon" className="h-16 w-16 text-green-500"><BellRing className="w-8 h-8" /></Button>
            <p className="text-sm text-neutral-400">Alarm</p>
          </div>
          </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <div className="flex justify-center my-2">
          <BellRing className="w-8 h-8 text-green-500" />
      </div>
      <AlertDialogTitle className="text-center">Alarm</AlertDialogTitle>
      <AlertDialogDescription className="py-4">
      <Input 
      className="text-lg text-center"
        type="password"
        pattern="[0-9]*" 
        inputMode="numeric"
        max={4}
        placeholder="Code"
      />
      </AlertDialogDescription>
    </AlertDialogHeader>
    <div className="flex justify-between">
      <Button size="lg" variant="destructive">Abbrechen</Button>
      <Button size="lg" className="bg-green-500 hover:bg-green-600">Ausführen</Button>
    </div>
  </AlertDialogContent>
</AlertDialog>
        </div>
        <Separator/>
        <div className="w-full p-4 text-center text-neutral-400">
          <div className="w-full flex flex-col gap-2">
          <div className="w-full flex gap-2">
              Informationen
            </div>
            <div className="flex gap-2">
              Fehler seit: 21.01.2024 - 18:22
            </div>
            <div className="flex gap-2">
              <Dot className="w-6 h-6 text-green-500" />
              Server online
            </div>
            <div className="flex gap-2">
              <Dot className="w-6 h-6 text-green-500" />
              Instanz online
            </div>
            <div className="flex gap-2">
              <Dot className="w-6 h-6 text-green-500" />
              MQTT online
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
