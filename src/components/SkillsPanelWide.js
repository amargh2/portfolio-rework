import React from "react"
import {SiJavascript} from 'react-icons/si'
import { SiHtml5 } from "react-icons/si"
import {SiCss3} from 'react-icons/si'
import{SiReact} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
import { SiNodedotjs } from "react-icons/si"
import {FcLinux} from 'react-icons/fc'
import { SiMongodb } from "react-icons/si"
const SkillsPanelWide = () => {
  return (
          <div className="flex justify-center p-2">
            <div class="flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 to-white rounded-lg p-2 shadow-lg">
                <h1 className='font-semibold text-2xl pb-6'>My Skills</h1>
                <div class="flex justify-evenly">
                    <div className="grid grid-cols-4 gap-3">
                      <div className="flex justify-center"><SiJavascript size={100} color={'Yellow'}/></div>
                      <div className="flex justify-center"><SiHtml5 size={100} color={'orange'}/></div>
                      <div className="flex justify-center"><SiCss3 size={100} color={'blue'}/></div>
                      <div className="flex justify-center"><img className='rounded-full h-32 w-50' src='./aplus.png' alt='me'></img></div>
                      <div className="flex justify-center"><img className='h-32 w-50' src='./ccna.png' alt='me'></img></div>
                      <div className="flex justify-center"><img className='h-32 w-50 rounded-full' src='./networkplus.png' alt='me'></img></div>
                      <div className="flex justify-center"><SiReact size={100} color={'indigo'}/></div>
                      <div className="flex justify-center"><SiTailwindcss size={100} color={'cyan'}/></div>
                      <div className="flex justify-center"><SiNodedotjs size={100} color={'green'}/></div>
                      <div className="flex justify-center"><FcLinux size={100} color={'green'}/></div>
                      <div className="flex justify-center"><SiMongodb size={100} color={'green'}/></div>
                    </div>
                </div>
              </div>
            
          </div>
  )
}

export default SkillsPanelWide