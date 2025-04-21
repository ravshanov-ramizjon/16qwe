'use client'

import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Skeleton } from "@/components/ui/skeleton"
import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { BarChart3, Instagram } from "lucide-react"
import { motion } from "framer-motion"

export default function ProfilePage() {
  const [tab, setTab] = useState("threads")
  const [avatarLoaded, setAvatarLoaded] = useState(false)

  useEffect(() => {
    const storedTab = localStorage.getItem("selectedTab")
    if (storedTab) {
      setTab(storedTab)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("selectedTab", tab)
  }, [tab])

  return (
    <div className="min-h-screen text-white p-4 max-w-2xl mx-auto space-y-4">
      <div className="flex items-center space-x-4">
        {!avatarLoaded ? (
          <Skeleton className="w-16 h-16 rounded-full bg-gray-700" />
        ) : (
          <img
            src="/avatar-placeholder.png"
            alt="avatar"
            className="w-16 h-16 rounded-full object-cover"
            onLoad={() => setAvatarLoaded(true)}
          />
        )}
        <div>
          <h1 className="text-xl font-bold">Ramiz Ravshanov</h1>
          <p className="text-gray-400 text-sm">ravshanovr.5962</p>
        </div>

        {/* Icons */}
        <div className="ml-auto flex items-center space-x-3">
          <BarChart3 className="w-5 h-5 text-white" />
          <Instagram className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Followers */}
      <p className="text-gray-400 text-sm">0 подписчиков</p>

      {/* Edit Profile Button + Modal with animation */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="w-full bg-[#181818] border-gray-600 text-white transition-colors">
            Редактировать профиль
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-black border-gray-700 p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <DialogHeader>
              <DialogTitle className="text-white">Редактирование профиля</DialogTitle>
            </DialogHeader>
            <Input placeholder="Новое имя..." className="bg-gray-800 text-white border-none focus-visible:ring-0" />
            <Input placeholder="Новый никнейм..." className="bg-gray-800 text-white border-none focus-visible:ring-0" />
            <Button className="bg-white text-black hover:bg-gray-300 mt-2 w-full">
              Сохранить
            </Button>
          </motion.div>
        </DialogContent>
      </Dialog>

      <Tabs value={tab} onValueChange={setTab} className="w-full">
        <TabsList className="w-full bg-transparent border-b border-gray-700 p-0">
          <TabsTrigger
            value=""
            className={`flex-1 text-white rounded-none border-b-2 ${
              tab === "threads" ? "" : "border-transparent"
            }`}
          >
            Ветки
          </TabsTrigger>
          <TabsTrigger
            value="replies"
            disabled
            className="flex-1 text-gray-500 rounded-none cursor-default"
          >
            Ответы
          </TabsTrigger>
          <TabsTrigger
            value="reposts"
            disabled
            className="flex-1 text-gray-500 rounded-none cursor-default"
          >
            Репосты
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <Card className=" bg-[#181818] border border-gray-700 p-3 flex items-center flex-row space-x-3">
        <div className="w-8 h-8 bg-gray-600 rounded-full" />
        <Input
          placeholder="Что нового?"
          className="flex-1 bg-transparent text-white placeholder:text-gray-400 border-none focus-visible:ring-0"
        />
        <Button className="bg-[#181818] text-white border border-[#383939]  transition-all">
          Опубликовать
        </Button>
      </Card>
    </div>
  )
}
