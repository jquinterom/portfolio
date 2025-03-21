import { scrollToSection } from '@/utils/scrollToSection'
import { motion } from 'framer-motion'
import { ChevronDown } from 'react-feather'
import { useTranslations } from "next-intl";


const HomeSection = () => {
  const t = useTranslations('HomeSection');

  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="text-center">

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4"
        >
          Jhon Quintero
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl dark:text-gray-300 mb-8"
        >
          {`<${t('title')}>`}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg dark:text-gray-300 mt-6 mb-8 px-4"
        >
          {t('about')}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            onClick={() => scrollToSection('footer')}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition-colors"
          >
            {t('get-in-touch')}
          </button>
        </motion.div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  )
}

export default HomeSection