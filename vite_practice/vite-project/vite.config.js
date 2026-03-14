import { defineConfig } from 'vite'
//import Button from '//...//...//'
//import react from '@vitejs/plugin-react'
export default defineConfig (
    {//root: 'src', 
        server:{
            port:3000,
            open: true,        
        },

         //Сделал одинаковые порты для dev и production
        preview: {
            port: 3000
            },
        build: {
            outDir: 'dist',
        },
        resolve:{
            alias: {
                '@': '/src'
            }
        },
        //plugins: [react()],
    })