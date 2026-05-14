import React from 'react'
import { Button } from "@/components/ui/button";
import { Bell } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Profile } from '@/types/definitions';

export default function ProfileIcon({profile} : {profile: Profile}) {
  return (
     <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="rounded-full relative">
              <Bell size={20} /><span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full"><Mail size={20} /></Button>
          </div>
          <div className="flex items-center gap-3 pl-4 border-l border-outline-variant/30">
            <div className="text-right hidden md:block">
              <p className="text-sm font-bold leading-none">{profile.name} {profile.surname}</p>
              <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">{profile.rol}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant" />
          </div>
        </div>
  )
}

