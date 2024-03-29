import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const Custom404 = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])
    return (
        <div>
            <h1 className="title-not-found">Ooops...</h1>
            <h1 className="title-not-found">Halaman yang anda cari tidak ditemukan</h1>
        </div>
    )
}

export default Custom404