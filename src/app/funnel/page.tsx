'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, Check, Building, Target, TrendingUp, Zap, Calendar, Mail, Phone, User, Briefcase, DollarSign, Clock, Star, BarChart3, Lightbulb, Rocket } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Section } from '@/components/ui/section'
import Navigation from '@/components/layout/navigation'
import Footer from '@/components/layout/footer'

interface FormData {
  businessType: string
  needs: string[]
  goal: string
  budget: string
  timeline: string
  name: string
  email: string
  phone: string
  company: string
}

interface QuoteResult {
  priceRange: string
  services: string[]
  strategy: string
  timeline: string
  roi: string
}

export default function FunnelPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    businessType: '',
    needs: [],
    goal: '',
    budget: '',
    timeline: '',
    name: '',
    email: '',
    phone: '',
    company: ''
  })
  const [showResult, setShowResult] = useState(false)
  const [quoteResult, setQuoteResult] = useState<QuoteResult | null>(null)

  const totalSteps = 6

  const businessTypes = [
    { id: 'startup', label: 'Startup', icon: Rocket, description: 'Early stage, high growth potential' },
    { id: 'small-business', label: 'Small Business', icon: Building, description: 'Established, looking to scale' },
    { id: 'enterprise', label: 'Enterprise', icon: Briefcase, description: 'Large scale, complex needs' }
  ]

  const needsOptions = [
    { id: 'marketing', label: 'Marketing', icon: TrendingUp, color: 'text-primary-orange' },
    { id: 'tech', label: 'Tech & Development', icon: Zap, color: 'text-primary-blue' },
    { id: 'both', label: 'Both (Full Growth)', icon: Star, color: 'text-gradient' }
  ]

  const goals = [
    { id: 'leads', label: 'Generate More Leads', icon: Target, description: 'Increase qualified leads and inquiries' },
    { id: 'sales', label: 'Boost Sales', icon: DollarSign, description: 'Drive direct revenue and conversions' },
    { id: 'branding', label: 'Build Brand Authority', icon: Lightbulb, description: 'Establish market leadership' },
    { id: 'automation', label: 'Automate Operations', icon: Zap, description: 'Streamline business processes' }
  ]

  const budgets = [
    { id: '<50k', label: 'Under ₹50K', description: 'Starter package' },
    { id: '50k-2l', label: '₹50K - ₹2L', description: 'Growth package' },
    { id: '2l-5l', label: '₹2L - ₹5L', description: 'Scale package' },
    { id: '5l+', label: '₹5L+', description: 'Enterprise package' }
  ]

  const timelines = [
    { id: 'asap', label: 'ASAP', description: 'Start immediately' },
    { id: '1month', label: '1 Month', description: 'Plan and prepare' },
    { id: '3months', label: '3 Months', description: 'Strategic timeline' },
    { id: '6months+', label: '6+ Months', description: 'Long-term planning' }
  ]

  const generateQuote = () => {
    let priceRange = ''
    let services: string[] = []
    let strategy = ''
    let estimatedTimeline = ''
    let expectedRoi = ''

    // Logic for quote generation
    if (formData.budget === '<50k') {
      priceRange = '₹50K - ₹1L'
      services = ['Basic SEO Setup', 'Social Media Management', 'Website Audit']
      strategy = 'Starter growth package focusing on foundational elements'
      estimatedTimeline = '2-3 months'
      expectedRoi = '2x-3x'
    } else if (formData.budget === '50k-2l') {
      priceRange = '₹1L - ₹3L'
      if (formData.needs.includes('marketing')) {
        services.push('Performance Marketing', 'Content Strategy', 'PPC Campaigns')
      }
      if (formData.needs.includes('tech')) {
        services.push('Website Development', 'Basic Automation', 'Analytics Setup')
      }
      strategy = 'Growth acceleration with focused marketing and tech integration'
      estimatedTimeline = '3-6 months'
      expectedRoi = '3x-4x'
    } else if (formData.budget === '2l-5l') {
      priceRange = '₹3L - ₹7L'
      services = ['Full Marketing Funnel', 'Custom Web Development', 'Advanced Automation', 'Brand Strategy']
      strategy = 'Comprehensive growth system with full marketing and tech stack'
      estimatedTimeline = '6-9 months'
      expectedRoi = '4x-6x'
    } else {
      priceRange = '₹7L+'
      services = ['Enterprise Marketing', 'Custom Software', 'Full Automation', 'PR & Branding', 'Advanced Analytics']
      strategy = 'Enterprise-level growth system with complete digital transformation'
      estimatedTimeline = '9-12 months'
      expectedRoi = '6x-10x'
    }

    setQuoteResult({
      priceRange,
      services,
      strategy,
      timeline: estimatedTimeline,
      roi: expectedRoi
    })
    setShowResult(true)
  }

  const handleNext = () => {
    if (currentStep === totalSteps) {
      generateQuote()
    } else {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1)
  }

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const progress = (currentStep / totalSteps) * 100

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <Section className="pt-32 lg:pt-40 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl lg:text-4xl font-display font-bold text-white">
                Get Your Custom Growth Strategy
              </h1>
              <span className="text-lg font-semibold text-zinc-300">
                Step {currentStep} of {totalSteps}
              </span>
            </div>
            <div className="w-full bg-zinc-800 rounded-full h-3">
              <motion.div
                className="bg-gradient-to-r from-primary-orange to-primary-blue h-3 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-zinc-900 border border-zinc-700 rounded-2xl">
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl font-display text-white mb-2">
                      {currentStep === 1 && 'What type of business do you run?'}
                      {currentStep === 2 && 'What do you need help with?'}
                      {currentStep === 3 && 'What is your primary goal?'}
                      {currentStep === 4 && 'What is your budget range?'}
                      {currentStep === 5 && 'When do you want to start?'}
                      {currentStep === 6 && 'How can we reach you?'}
                    </CardTitle>
                    <CardDescription className="text-lg text-zinc-300">
                      {currentStep === 1 && 'This helps us understand your business context and scale'}
                      {currentStep === 2 && 'Select all areas where you need support'}
                      {currentStep === 3 && 'What outcome are you looking to achieve?'}
                      {currentStep === 4 && 'Investment range for your growth project'}
                      {currentStep === 5 && 'Timeline for project kickoff'}
                      {currentStep === 6 && 'Your contact information for the consultation'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-8">
                    {/* Step 1: Business Type */}
                    {currentStep === 1 && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {businessTypes.map((type) => (
                          <div
                            key={type.id}
                            onClick={() => updateFormData('businessType', type.id)}
                            className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                              formData.businessType === type.id
                                ? 'border-primary-orange bg-primary-orange/10'
                                : 'border-zinc-700 hover:border-zinc-500 bg-zinc-800'
                            }`}
                          >
                            <type.icon className="h-8 w-8 text-primary-orange mb-3" />
                            <h3 className="font-semibold text-lg text-white mb-2">{type.label}</h3>
                            <p className="text-zinc-300 text-sm">{type.description}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Step 2: Needs */}
                    {currentStep === 2 && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {needsOptions.map((option) => (
                          <div
                            key={option.id}
                            onClick={() => updateFormData('needs', formData.needs.includes(option.id) 
                              ? formData.needs.filter(n => n !== option.id) 
                              : [...formData.needs, option.id])}
                            className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                              formData.needs.includes(option.id)
                                ? 'border-primary-orange bg-primary-orange/10'
                                : 'border-zinc-700 hover:border-zinc-500 bg-zinc-800'
                            }`}
                          >
                            <option.icon className={`h-8 w-8 ${option.color} mb-3`} />
                            <h3 className="font-semibold text-lg text-white mb-2">{option.label}</h3>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Step 3: Goals */}
                    {currentStep === 3 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {goals.map((goal) => (
                          <div
                            key={goal.id}
                            onClick={() => updateFormData('goal', goal.id)}
                            className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                              formData.goal === goal.id
                                ? 'border-primary-orange bg-primary-orange/10'
                                : 'border-zinc-700 hover:border-zinc-500 bg-zinc-800'
                            }`}
                          >
                            <goal.icon className="h-8 w-8 text-primary-orange mb-3" />
                            <h3 className="font-semibold text-lg text-white mb-2">{goal.label}</h3>
                            <p className="text-zinc-300 text-sm">{goal.description}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Step 4: Budget */}
                    {currentStep === 4 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {budgets.map((budget) => (
                          <div
                            key={budget.id}
                            onClick={() => updateFormData('budget', budget.id)}
                            className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                              formData.budget === budget.id
                                ? 'border-primary-orange bg-primary-orange/10'
                                : 'border-zinc-700 hover:border-zinc-500 bg-zinc-800'
                            }`}
                          >
                            <DollarSign className="h-8 w-8 text-primary-orange mb-3" />
                            <h3 className="font-semibold text-lg text-white mb-2">{budget.label}</h3>
                            <p className="text-zinc-300 text-sm">{budget.description}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Step 5: Timeline */}
                    {currentStep === 5 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {timelines.map((timeline) => (
                          <div
                            key={timeline.id}
                            onClick={() => updateFormData('timeline', timeline.id)}
                            className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                              formData.timeline === timeline.id
                                ? 'border-primary-orange bg-primary-orange/10'
                                : 'border-zinc-700 hover:border-zinc-500 bg-zinc-800'
                            }`}
                          >
                            <Clock className="h-8 w-8 text-primary-orange mb-3" />
                            <h3 className="font-semibold text-lg text-white mb-2">{timeline.label}</h3>
                            <p className="text-zinc-300 text-sm">{timeline.description}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Step 6: Contact Info */}
                    {currentStep === 6 && (
                      <div className="space-y-4 max-w-md mx-auto">
                        <div>
                          <label className="block text-sm font-medium text-zinc-300 mb-2">Full Name</label>
                          <div className="relative">
                            <User className="absolute left-3 top-3 h-5 w-5 text-zinc-400" />
                            <input
                              type="text"
                              value={formData.name}
                              onChange={(e) => updateFormData('name', e.target.value)}
                              className="w-full pl-10 pr-4 py-3 bg-zinc-800 border border-zinc-700 text-white rounded-lg placeholder-zinc-500 focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                              placeholder="John Doe"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-zinc-300 mb-2">Email</label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-5 w-5 text-zinc-400" />
                            <input
                              type="email"
                              value={formData.email}
                              onChange={(e) => updateFormData('email', e.target.value)}
                              className="w-full pl-10 pr-4 py-3 bg-zinc-800 border border-zinc-700 text-white rounded-lg placeholder-zinc-500 focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                              placeholder="john@company.com"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-zinc-300 mb-2">Phone</label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-3 h-5 w-5 text-zinc-400" />
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => updateFormData('phone', e.target.value)}
                              className="w-full pl-10 pr-4 py-3 bg-zinc-800 border border-zinc-700 text-white rounded-lg placeholder-zinc-500 focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                              placeholder="+91 98765 43210"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-zinc-300 mb-2">Company</label>
                          <div className="relative">
                            <Building className="absolute left-3 top-3 h-5 w-5 text-zinc-400" />
                            <input
                              type="text"
                              value={formData.company}
                              onChange={(e) => updateFormData('company', e.target.value)}
                              className="w-full pl-10 pr-4 py-3 bg-zinc-800 border border-zinc-700 text-white rounded-lg placeholder-zinc-500 focus:ring-2 focus:ring-primary-orange focus:border-transparent"
                              placeholder="Company Name"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentStep === 1}
                    className="group"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Previous
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={
                      (currentStep === 1 && !formData.businessType) ||
                      (currentStep === 2 && formData.needs.length === 0) ||
                      (currentStep === 3 && !formData.goal) ||
                      (currentStep === 4 && !formData.budget) ||
                      (currentStep === 5 && !formData.timeline) ||
                      (currentStep === 6 && (!formData.name || !formData.email || !formData.phone))
                    }
                    className="group"
                  >
                    {currentStep === totalSteps ? 'Get My Quote' : 'Next'}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            ) : (
              /* Results */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-zinc-900 border-2 border-primary-orange rounded-2xl">
                  <CardHeader className="text-center pb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-orange to-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-3xl font-display text-white mb-2">
                      Your Custom Growth Strategy
                    </CardTitle>
                    <CardDescription className="text-lg text-zinc-300">
                      Based on your requirements, here's your personalized growth plan
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-xl">
                        <h3 className="font-semibold text-lg text-white mb-4 flex items-center">
                          <DollarSign className="h-5 w-5 text-primary-orange mr-2" />
                          Investment Range
                        </h3>
                        <p className="text-2xl font-bold text-primary-orange">{quoteResult?.priceRange}</p>
                      </div>
                      <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-xl">
                        <h3 className="font-semibold text-lg text-white mb-4 flex items-center">
                          <BarChart3 className="h-5 w-5 text-primary-blue mr-2" />
                          Expected ROI
                        </h3>
                        <p className="text-2xl font-bold text-primary-blue">{quoteResult?.roi}</p>
                      </div>
                    </div>

                    <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-xl">
                      <h3 className="font-semibold text-lg text-white mb-4 flex items-center">
                        <Target className="h-5 w-5 text-primary-orange mr-2" />
                        Recommended Services
                      </h3>
                      <ul className="space-y-2">
                        {quoteResult?.services.map((service, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <Check className="h-5 w-5 text-primary-orange flex-shrink-0" />
                            <span className="text-zinc-300">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-xl">
                      <h3 className="font-semibold text-lg text-white mb-4 flex items-center">
                        <Lightbulb className="h-5 w-5 text-primary-blue mr-2" />
                        Growth Strategy
                      </h3>
                      <p className="text-zinc-300 leading-relaxed">{quoteResult?.strategy}</p>
                    </div>

                    <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-xl">
                      <h3 className="font-semibold text-lg text-white mb-4 flex items-center">
                        <Clock className="h-5 w-5 text-primary-orange mr-2" />
                        Estimated Timeline
                      </h3>
                      <p className="text-zinc-300">{quoteResult?.timeline}</p>
                    </div>

                    <div className="text-center pt-6">
                      <Button size="lg" className="bg-gradient-to-r from-primary-orange to-primary-blue text-white text-lg px-8 py-4 group">
                        Schedule Free Consultation
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                      <p className="text-zinc-300 mt-4">
                        We'll contact you within 24 hours to discuss your growth strategy
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </Section>
      <Footer />
    </div>
  )
}
