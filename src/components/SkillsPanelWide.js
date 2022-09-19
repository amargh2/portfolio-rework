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
          <div className="flex justify-center p-10">
            <div class="flex flex-col justify-center bg-gradient-to-br from-blue-200 to-white rounded-lg p-2">
              <div class="flex justify-center">
                <h1 className='prose-lg font-bold'>My Skills</h1>
              </div>
                <div class="flex justify-evenly">
                    <div className="grid grid-cols-4 gap-3">
                      <div className="items-middle"><SiJavascript size={100} color={'Yellow'}/></div>
                      <div className="justify-center"><SiHtml5 size={100} color={'orange'}/></div>
                      <div className="justify-center"><SiCss3 size={100} color={'blue'}/></div>
                      <div className="items-center"><img className='rounded-full h-32 w-50' src='./aplus.png' alt='me'></img></div>
                      <div className="justify-center"><img className='h-32 w-50' src='./ccna.png' alt='me'></img></div>
                      <div className="justify-center"><img className='h-32 w-50 rounded-full' src='./networkplus.png' alt='me'></img></div>
                      <div className="items-middle"><SiReact size={100} color={'indigo'}/></div>
                      <div className="justify-center"><SiTailwindcss size={100} color={'cyan'}/></div>
                      <div className="justify-center"><SiNodedotjs size={100} color={'green'}/></div>
                      <div className="justify-center"><FcLinux size={100} color={'green'}/></div>
                      <div className="justify-center"><SiMongodb size={100} color={'green'}/></div>
                    </div>
                </div>
              </div>
            
          </div>
  )
}

export default SkillsPanelWide