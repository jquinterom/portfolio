import { skills } from '@/utils/constants'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const SkillsSection = () => {
  const t = useTranslations('SkillsSection')

  return (
    <section id="skills" className="py-20  dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">{t('title')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-slate-300 dark:bg-gray-700 rounded-lg p-6 text-center hover:dark:bg-gray-600 hover:bg-gray-400 transition-colors flex items-center justify-center"
            >
              <h3 className="text-xl font-semibold">{skill}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection