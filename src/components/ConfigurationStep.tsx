import React, { useEffect, useState, createElement } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Info, Building2, Truck, ChevronDown, Phone, Mail, MessageSquare, FileText, Headphones, Calendar, MapPin, BarChart3, DollarSign, Clock, Layers, ShieldCheck, PlusCircle, X, Settings, Plus, Search, Grid, Package, Zap, BarChart, LineChart, PieChart, Database, CloudCog, Webhook, Cpu, ShoppingCart, CreditCard, GraduationCap, Heart, Users, Bot, UserCheck } from 'lucide-react';
// Core product offerings
const coreProducts = [{
  id: 'voice',
  name: 'Voice AI',
  icon: Phone,
  description: 'AI-powered voice conversations and support',
  defaultFor: ['saas', 'ecommerce', 'fintech', 'edtech', 'healthtech', 'logistics']
}, {
  id: 'email',
  name: 'Email Automation',
  icon: Mail,
  description: 'Intelligent email campaigns and follow-ups',
  defaultFor: ['saas', 'ecommerce', 'fintech', 'edtech', 'healthtech', 'logistics']
}, {
  id: 'messaging',
  name: 'SMS & Messaging',
  icon: MessageSquare,
  description: 'Automated text messaging and notifications',
  defaultFor: ['saas', 'ecommerce', 'fintech', 'edtech', 'healthtech']
}, {
  id: 'chat',
  name: 'AI Chat Support',
  icon: Bot,
  description: 'Intelligent chatbot for customer support',
  defaultFor: ['saas', 'ecommerce', 'fintech', 'edtech', 'healthtech', 'logistics']
}, {
  id: 'documents',
  name: 'Document Processing',
  icon: FileText,
  description: 'Automated document analysis and extraction',
  defaultFor: ['fintech', 'healthtech', 'logistics']
}, {
  id: 'agent',
  name: 'AI Agent Deployment',
  icon: Cpu,
  description: 'Custom AI agents for complex workflows',
  defaultFor: ['saas', 'fintech', 'healthtech']
}];
// Industry-specific solutions
const industrySolutions = [{
  id: 'onboarding',
  name: 'High-Touch Onboarding',
  icon: UserCheck,
  description: 'Accelerate trial-to-paid conversion and time-to-value',
  defaultFor: ['saas']
}, {
  id: 'support-scalable',
  name: 'Scalable Technical Support',
  icon: Headphones,
  description: 'Reduce churn with automated support and feedback',
  defaultFor: ['saas']
}, {
  id: 'cart-abandonment',
  name: 'Cart Abandonment Recovery',
  icon: ShoppingCart,
  description: 'Proactive outreach to recover lost sales',
  defaultFor: ['ecommerce']
}, {
  id: 'post-purchase',
  name: 'Post-Purchase Support',
  icon: Package,
  description: 'Automated order updates and support',
  defaultFor: ['ecommerce']
}, {
  id: 'verification',
  name: 'Secure Customer Verification',
  icon: ShieldCheck,
  description: 'Compliant onboarding with identity verification',
  defaultFor: ['fintech']
}, {
  id: 'transaction-support',
  name: 'Complex Transaction Support',
  icon: CreditCard,
  description: 'AI-powered support for financial transactions',
  defaultFor: ['fintech']
}, {
  id: 'student-conversion',
  name: 'Student Lead Conversion',
  icon: GraduationCap,
  description: 'Convert prospective students to enrollments',
  defaultFor: ['edtech']
}, {
  id: 'student-retention',
  name: 'Student Support & Retention',
  icon: Users,
  description: 'Engage current students to reduce dropout',
  defaultFor: ['edtech']
}, {
  id: 'hipaa-support',
  name: 'HIPAA-Compatible Support',
  icon: Heart,
  description: 'Secure patient communication and support',
  defaultFor: ['healthtech']
}, {
  id: 'supply-chain',
  name: 'Supply Chain Automation',
  icon: Truck,
  description: 'Automated logistics and tracking updates',
  defaultFor: ['logistics']
}];
// Additional custom products for drawer
const customProducts = [...coreProducts, ...industrySolutions, {
  id: 'analytics',
  name: 'Advanced Analytics',
  icon: BarChart,
  description: 'Comprehensive reporting and business intelligence',
  defaultFor: []
}, {
  id: 'forecasting',
  name: 'Demand Forecasting',
  icon: LineChart,
  description: 'AI-powered customer behavior predictions',
  defaultFor: []
}, {
  id: 'market-data',
  name: 'Market Intelligence',
  icon: PieChart,
  description: 'Real-time market insights and benchmarks',
  defaultFor: []
}, {
  id: 'integrations',
  name: 'CRM Integrations',
  icon: Webhook,
  description: 'Connect with leading CRM and support platforms',
  defaultFor: []
}, {
  id: 'api-access',
  name: 'API Access',
  icon: Cpu,
  description: 'Direct integration with your systems',
  defaultFor: []
}, {
  id: 'data-enrichment',
  name: 'Data Enrichment',
  icon: Database,
  description: 'Enhanced customer data and insights',
  defaultFor: []
}, {
  id: 'managed-service',
  name: 'Managed Service',
  icon: CloudCog,
  description: 'Fully managed implementation and operations',
  defaultFor: []
}];
// Pricing metrics options
const pricingMetrics = [{
  id: 'per-seat',
  name: 'Per Seat/Month',
  icon: Users,
  description: 'Fixed monthly fee per agent or user seat',
  defaultFor: ['saas', 'ecommerce', 'fintech', 'edtech', 'healthtech']
}, {
  id: 'per-resolution',
  name: 'Per Resolution',
  icon: Check,
  description: 'Pay per successful AI-resolved conversation',
  defaultFor: ['saas', 'ecommerce', 'edtech']
}, {
  id: 'per-message',
  name: 'Per Message Sent',
  icon: MessageSquare,
  description: 'Pay per message sent to customers',
  defaultFor: ['ecommerce', 'edtech']
}, {
  id: 'per-segment',
  name: 'Per Message Segment',
  icon: MessageSquare,
  description: 'Pay per SMS segment sent or received',
  defaultFor: ['ecommerce', 'fintech', 'healthtech']
}, {
  id: 'per-conversation',
  name: 'Per 24-hour Conversation',
  icon: MessageSquare,
  description: 'Pay per WhatsApp conversation window',
  defaultFor: ['ecommerce', 'fintech']
}, {
  id: 'per-minute',
  name: 'Per Minute',
  icon: Phone,
  description: 'Pay per minute of voice call',
  defaultFor: ['saas', 'fintech', 'healthtech']
}, {
  id: 'per-email',
  name: 'Per Email Sent',
  icon: Mail,
  description: 'Pay per bulk email sent',
  defaultFor: ['saas', 'ecommerce', 'edtech']
}, {
  id: 'base-subscription',
  name: 'Base Subscription',
  icon: DollarSign,
  description: 'Fixed monthly base fee with included usage',
  defaultFor: []
}];
// Customer types
const customerTypes = [{
  id: 'saas',
  name: 'SaaS',
  icon: Zap,
  description: 'User acquisition, onboarding, and support'
}, {
  id: 'ecommerce',
  name: 'E-Commerce',
  icon: ShoppingCart,
  description: 'Conversion rate and customer loyalty'
}, {
  id: 'fintech',
  name: 'FinTech',
  icon: CreditCard,
  description: 'Security, accuracy, and compliance'
}, {
  id: 'edtech',
  name: 'EdTech',
  icon: GraduationCap,
  description: 'Student engagement and conversion'
}, {
  id: 'healthtech',
  name: 'HealthTech',
  icon: Heart,
  description: 'HIPAA-compliant patient support'
}, {
  id: 'logistics',
  name: 'B2B Logistics & Supply Chain',
  icon: Truck,
  description: 'Supply chain automation and tracking'
}];
export function ConfigurationStep() {
  // State for customer type and selected products
  const [customerType, setCustomerType] = useState('');
  const [selectedCore, setSelectedCore] = useState<string[]>([]);
  const [selectedSolutions, setSelectedSolutions] = useState<string[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Array<{
    id: string;
    pricingMetric: string;
  }>>([]);
  const [showCustomerTypeDropdown, setShowCustomerTypeDropdown] = useState(false);
  // State for custom product drawer
  const [showCustomProductDrawer, setShowCustomProductDrawer] = useState(false);
  const [customProductSearch, setCustomProductSearch] = useState('');
  const [customProductCategory, setCustomProductCategory] = useState<string | null>(null);
  // State for Intercom service-specific pricing metrics
  const [servicePricingMetrics, setServicePricingMetrics] = useState<Record<string, string>>({});
  // Toggle selection functions
  const toggleCore = (id: string) => {
    if (selectedCore.includes(id)) {
      setSelectedCore(selectedCore.filter(item => item !== id));
      setSelectedProducts(selectedProducts.filter(item => item.id !== id));
    } else {
      setSelectedCore([...selectedCore, id]);
      // Set default pricing metric based on product type
      let defaultMetric = 'per-usage';
      if (id === 'agent') defaultMetric = 'per-transaction';
      if (id === 'chat') defaultMetric = 'per-conversation';
      setSelectedProducts([...selectedProducts, {
        id,
        pricingMetric: defaultMetric
      }]);
    }
  };
  const toggleSolution = (id: string) => {
    if (selectedSolutions.includes(id)) {
      setSelectedSolutions(selectedSolutions.filter(item => item !== id));
      setSelectedProducts(selectedProducts.filter(item => item.id !== id));
    } else {
      setSelectedSolutions([...selectedSolutions, id]);
      // Set default pricing metric based on solution type
      let defaultMetric = 'per-usage';
      if (id === 'onboarding') defaultMetric = 'per-conversion';
      if (id === 'support-scalable') defaultMetric = 'per-user';
      if (id === 'cart-abandonment') defaultMetric = 'per-conversion';
      if (id === 'post-purchase') defaultMetric = 'per-transaction';
      if (id === 'verification') defaultMetric = 'per-transaction';
      if (id === 'transaction-support') defaultMetric = 'per-transaction';
      if (id === 'student-conversion') defaultMetric = 'per-conversion';
      if (id === 'student-retention') defaultMetric = 'per-user';
      if (id === 'hipaa-support') defaultMetric = 'per-transaction';
      if (id === 'supply-chain') defaultMetric = 'per-usage';
      setSelectedProducts([...selectedProducts, {
        id,
        pricingMetric: defaultMetric
      }]);
    }
  };
  // Add custom product
  const addCustomProduct = (id: string) => {
    const isCore = coreProducts.some(product => product.id === id);
    const isSolution = industrySolutions.some(solution => solution.id === id);
    // Set default pricing metric based on product type
    let defaultMetric = 'per-usage';
    if (id === 'onboarding') defaultMetric = 'per-conversion';
    if (id === 'support-scalable') defaultMetric = 'per-user';
    if (id === 'cart-abandonment') defaultMetric = 'per-conversion';
    if (id === 'post-purchase') defaultMetric = 'per-transaction';
    if (id === 'verification') defaultMetric = 'per-transaction';
    if (id === 'transaction-support') defaultMetric = 'per-transaction';
    if (id === 'student-conversion') defaultMetric = 'per-conversion';
    if (id === 'student-retention') defaultMetric = 'per-user';
    if (id === 'hipaa-support') defaultMetric = 'per-transaction';
    if (id === 'supply-chain') defaultMetric = 'per-usage';
    if (isCore && !selectedCore.includes(id)) {
      setSelectedCore([...selectedCore, id]);
      setSelectedProducts([...selectedProducts, {
        id,
        pricingMetric: defaultMetric
      }]);
    } else if (isSolution && !selectedSolutions.includes(id)) {
      setSelectedSolutions([...selectedSolutions, id]);
      setSelectedProducts([...selectedProducts, {
        id,
        pricingMetric: defaultMetric
      }]);
    } else if (!isCore && !isSolution) {
      // It's a custom product not in core or solutions
      setSelectedProducts([...selectedProducts, {
        id,
        pricingMetric: defaultMetric
      }]);
    }
    setShowCustomProductDrawer(false);
  };
  // Update pricing metric for a product
  const updatePricingMetric = (productId: string, metric: string) => {
    setSelectedProducts(selectedProducts.map(product => product.id === productId ? {
      ...product,
      pricingMetric: metric
    } : product));
  };
  // Update pricing metric for an Intercom service
  const updateServicePricingMetric = (serviceId: string, metric: string) => {
    setServicePricingMetrics({
      ...servicePricingMetrics,
      [serviceId]: metric
    });
  };
  // Get product name by id
  const getProductName = (id: string) => {
    const product = customProducts.find(p => p.id === id);
    return product ? product.name : id;
  };
  // Get product icon by id
  const getProductIcon = (id: string) => {
    const product = customProducts.find(p => p.id === id);
    return product ? product.icon : Bot; // Default icon
  };
  // Filter custom products based on search and category
  const filteredCustomProducts = customProducts.filter(product => {
    const matchesSearch = customProductSearch === '' || product.name.toLowerCase().includes(customProductSearch.toLowerCase()) || product.description.toLowerCase().includes(customProductSearch.toLowerCase());
    const matchesCategory = customProductCategory === null || customProductCategory === 'core' && coreProducts.some(p => p.id === product.id) || customProductCategory === 'solutions' && industrySolutions.some(s => s.id === product.id) || customProductCategory === 'custom' && !coreProducts.some(p => p.id === product.id) && !industrySolutions.some(s => s.id === product.id);
    return matchesSearch && matchesCategory;
  });
  // Check if product is already selected
  const isProductSelected = (id: string) => {
    return selectedProducts.some(product => product.id === id);
  };
  // Check if can proceed
  const canProceed = customerType && selectedCore.length > 0;
  useEffect(() => {
    if (customerType) {
      // Set default core products
      const defaultCore = coreProducts.filter(product => product.defaultFor.includes(customerType)).map(product => product.id);
      setSelectedCore(defaultCore);
      // Set default industry solutions
      const defaultSolutions = industrySolutions.filter(solution => solution.defaultFor.includes(customerType)).map(solution => solution.id);
      setSelectedSolutions(defaultSolutions);
      // Initialize selected products with default pricing metrics
      const initialProducts = [...defaultCore, ...defaultSolutions].map(id => {
        // Set default pricing metrics for non-Intercom products
        let defaultMetric = 'per-usage';
        // Keep existing logic for other products
        if (id === 'onboarding') defaultMetric = 'per-conversion';
        if (id === 'support-scalable') defaultMetric = 'per-user';
        if (id === 'cart-abandonment') defaultMetric = 'per-conversion';
        if (id === 'post-purchase') defaultMetric = 'per-transaction';
        if (id === 'verification') defaultMetric = 'per-transaction';
        if (id === 'transaction-support') defaultMetric = 'per-transaction';
        if (id === 'student-conversion') defaultMetric = 'per-conversion';
        if (id === 'student-retention') defaultMetric = 'per-user';
        if (id === 'hipaa-support') defaultMetric = 'per-transaction';
        if (id === 'supply-chain') defaultMetric = 'per-usage';
        return {
          id,
          pricingMetric: defaultMetric
        };
      });
      setSelectedProducts(initialProducts);
      // Initialize Intercom service-specific pricing metrics
      const intercomServices: Record<string, string> = {};
      if (defaultCore.includes('voice')) {
        intercomServices['platform-plans'] = 'base-subscription';
        intercomServices['phone'] = 'per-minute';
      }
      if (defaultCore.includes('chat')) {
        intercomServices['fin-ai-agent'] = 'per-resolution';
      }
      if (defaultCore.includes('agent')) {
        intercomServices['fin-ai-copilot'] = 'per-seat';
      }
      if (defaultCore.includes('messaging')) {
        intercomServices['proactive-messaging'] = 'base-subscription';
        intercomServices['sms'] = 'per-segment';
        intercomServices['whatsapp'] = 'per-conversation';
      }
      if (defaultCore.includes('email')) {
        intercomServices['bulk-email'] = 'per-email';
      }
      setServicePricingMetrics(intercomServices);
    }
  }, [customerType]);
  return <div className="w-full bg-white">
      <div className="p-3 border-b border-gray-200">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-gray-700">
            Customer Opportunities
          </Link>
          <ArrowRight size={12} />
          <span className="font-medium text-black">Configure</span>
        </div>
      </div>
      <div className="max-w-4xl mx-auto p-5">
        <h1 className="text-2xl font-semibold mb-2">Configure Quote</h1>
        <p className="text-gray-500 mb-6">
          Select AI services and pricing metrics for your customer
        </p>
        <div className="space-y-6">
          {/* Customer Type Selection */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-medium">Industry</h2>
              <div className="text-sm text-gray-500 flex items-center gap-1">
                <Info size={14} />
                <span>This will pre-select recommended services</span>
              </div>
            </div>
            <div className="relative">
              <button className="w-full p-3 border border-gray-200 rounded-lg flex justify-between items-center hover:border-gray-300" onClick={() => setShowCustomerTypeDropdown(!showCustomerTypeDropdown)}>
                {customerType ? <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      {createElement(customerTypes.find(type => type.id === customerType)?.icon || Building2, {
                    size: 18,
                    className: 'text-gray-600'
                  })}
                    </div>
                    <div className="flex flex-col items-start">
                      <div className="font-medium">
                        {customerTypes.find(type => type.id === customerType)?.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {customerTypes.find(type => type.id === customerType)?.description}
                      </div>
                    </div>
                  </div> : <span className="text-gray-500">Select industry</span>}
                <ChevronDown size={16} className={showCustomerTypeDropdown ? 'transform rotate-180' : ''} />
              </button>
              {showCustomerTypeDropdown && <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
                  {customerTypes.map(type => <button key={type.id} className="w-full p-3 text-left hover:bg-gray-50 flex items-center gap-3" onClick={() => {
                setCustomerType(type.id);
                setShowCustomerTypeDropdown(false);
              }}>
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                        <type.icon size={18} className="text-gray-600" />
                      </div>
                      <div>
                        <div className="font-medium">{type.name}</div>
                        <div className="text-sm text-gray-500">
                          {type.description}
                        </div>
                      </div>
                      {customerType === type.id && <Check size={16} className="ml-auto text-black" />}
                    </button>)}
                </div>}
            </div>
          </div>

          {/* Core Products */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-medium">Core AI Services</h2>
              <div className="text-sm text-gray-500 flex items-center gap-1">
                <Info size={14} />
                <span>Select the core AI-powered services</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {coreProducts.map(product => {
              const ProductIcon = product.icon;
              return <button key={product.id} className={`p-3 border rounded-lg text-left transition-colors ${selectedCore.includes(product.id) ? 'border-black bg-gray-50 shadow-sm' : 'border-gray-200 hover:border-gray-300'}`} onClick={() => toggleCore(product.id)}>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                          <ProductIcon size={18} className="text-gray-600" />
                        </div>
                        <div>
                          <div className="font-medium">{product.name}</div>
                          <div className="text-sm text-gray-500">
                            {product.description}
                          </div>
                        </div>
                      </div>
                      {selectedCore.includes(product.id) && <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                          <Check size={12} className="text-white" />
                        </div>}
                    </div>
                  </button>;
            })}
            </div>
          </div>

          {/* Industry Solutions */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-medium">Industry Solutions</h2>
              <div className="text-sm text-gray-500 flex items-center gap-1">
                <Info size={14} />
                <span>Industry-specific use cases and workflows</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {industrySolutions.map(solution => {
              const SolutionIcon = solution.icon;
              return <button key={solution.id} className={`p-3 border rounded-lg text-left transition-colors ${selectedSolutions.includes(solution.id) ? 'border-black bg-gray-50 shadow-sm' : 'border-gray-200 hover:border-gray-300'}`} onClick={() => toggleSolution(solution.id)}>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                          <SolutionIcon size={18} className="text-gray-600" />
                        </div>
                        <div>
                          <div className="font-medium">{solution.name}</div>
                          <div className="text-sm text-gray-500">
                            {solution.description}
                          </div>
                        </div>
                      </div>
                      {selectedSolutions.includes(solution.id) && <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                          <Check size={12} className="text-white" />
                        </div>}
                    </div>
                  </button>;
            })}
            </div>
          </div>

          {/* Selected Products & Pricing Metrics */}
          {selectedProducts.length > 0 && <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-medium">Pricing Metrics</h2>
                <div className="text-sm text-gray-500 flex items-center gap-1">
                  <Info size={14} />
                  <span>Select how each service will be priced</span>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Service
                      </th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Pricing Metric
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {/* Map to Intercom-specific services */}
                    {[{
                  id: 'platform-plans',
                  name: 'Core Platform Plans',
                  originalId: 'voice',
                  defaultMetric: 'base-subscription'
                }, {
                  id: 'fin-ai-agent',
                  name: 'Fin AI Agent',
                  originalId: 'chat',
                  defaultMetric: 'per-resolution'
                }, {
                  id: 'fin-ai-copilot',
                  name: 'Fin AI Copilot',
                  originalId: 'agent',
                  defaultMetric: 'per-seat'
                }, {
                  id: 'proactive-messaging',
                  name: 'Proactive Messaging Add-ons',
                  originalId: 'messaging',
                  defaultMetric: 'base-subscription'
                }, {
                  id: 'sms',
                  name: 'SMS',
                  originalId: 'messaging',
                  defaultMetric: 'per-segment'
                }, {
                  id: 'whatsapp',
                  name: 'WhatsApp',
                  originalId: 'messaging',
                  defaultMetric: 'per-conversation'
                }, {
                  id: 'phone',
                  name: 'Phone (Fin Voice)',
                  originalId: 'voice',
                  defaultMetric: 'per-minute'
                }, {
                  id: 'bulk-email',
                  name: 'Bulk Email',
                  originalId: 'email',
                  defaultMetric: 'per-email'
                }].map(service => {
                  // Check if the original product is selected
                  const originalProduct = selectedProducts.find(product => product.id === service.originalId);
                  // If we don't have a corresponding product, skip this service
                  if (!originalProduct) return null;
                  const ProductIcon = getProductIcon(originalProduct.id);
                  // Use service-specific pricing metric
                  const currentMetric = servicePricingMetrics[service.id] || service.defaultMetric;
                  return <tr key={service.id} className="hover:bg-gray-50">
                            <td className="px-4 py-3 whitespace-nowrap">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                                  <ProductIcon size={18} className="text-gray-600" />
                                </div>
                                <div>
                                  <div className="font-medium">
                                    {service.name}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap">
                              <select value={currentMetric} onChange={e => updateServicePricingMetric(service.id, e.target.value)} className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm">
                                {pricingMetrics.map(metric => <option key={metric.id} value={metric.id}>
                                    {metric.name}
                                  </option>)}
                              </select>
                            </td>
                          </tr>;
                }).filter(Boolean)}
                  </tbody>
                </table>
              </div>
              <div className="mt-3 flex justify-end">
                <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900" onClick={() => setShowCustomProductDrawer(true)}>
                  <Plus size={14} />
                  <span>Add Custom Service</span>
                </button>
              </div>
            </div>}
        </div>
        <div className="mt-8 flex justify-end gap-3">
          <Link to="/" className="px-4 py-2 border border-gray-200 rounded-md text-sm font-medium transition-colors hover:bg-gray-50">
            Cancel
          </Link>
          <Link to="/volume" className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${canProceed ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}>
            Next
          </Link>
        </div>
      </div>

      {/* Custom Product Drawer */}
      {showCustomProductDrawer && <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-30" onClick={() => setShowCustomProductDrawer(false)}></div>
          <div className="absolute inset-y-0 right-0 max-w-full flex">
            <div className="relative w-screen max-w-md">
              <div className="h-full flex flex-col bg-white shadow-xl">
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                  <h2 className="text-lg font-medium">Add Custom Service</h2>
                  <button onClick={() => setShowCustomProductDrawer(false)} className="text-gray-500 hover:text-gray-700">
                    <X size={20} />
                  </button>
                </div>
                <div className="p-4 border-b border-gray-200">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search size={16} className="text-gray-400" />
                    </div>
                    <input type="text" placeholder="Search services..." value={customProductSearch} onChange={e => setCustomProductSearch(e.target.value)} className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md" />
                  </div>
                  <div className="mt-3 flex gap-2">
                    <button className={`px-3 py-1.5 text-sm rounded-md ${customProductCategory === null ? 'bg-gray-100 font-medium' : 'bg-white border border-gray-200'}`} onClick={() => setCustomProductCategory(null)}>
                      All
                    </button>
                    <button className={`px-3 py-1.5 text-sm rounded-md ${customProductCategory === 'core' ? 'bg-gray-100 font-medium' : 'bg-white border border-gray-200'}`} onClick={() => setCustomProductCategory('core')}>
                      Core
                    </button>
                    <button className={`px-3 py-1.5 text-sm rounded-md ${customProductCategory === 'solutions' ? 'bg-gray-100 font-medium' : 'bg-white border border-gray-200'}`} onClick={() => setCustomProductCategory('solutions')}>
                      Solutions
                    </button>
                    <button className={`px-3 py-1.5 text-sm rounded-md ${customProductCategory === 'custom' ? 'bg-gray-100 font-medium' : 'bg-white border border-gray-200'}`} onClick={() => setCustomProductCategory('custom')}>
                      Custom
                    </button>
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto p-4">
                  <div className="space-y-3">
                    {filteredCustomProducts.map(product => {
                  const ProductIcon = product.icon;
                  const isSelected = isProductSelected(product.id);
                  return <div key={product.id} className={`p-3 border rounded-lg ${isSelected ? 'border-black bg-gray-50' : 'border-gray-200'}`}>
                          <div className="flex justify-between">
                            <div className="flex items-start gap-3">
                              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                                <ProductIcon size={18} className="text-gray-600" />
                              </div>
                              <div>
                                <div className="font-medium">
                                  {product.name}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {product.description}
                                </div>
                              </div>
                            </div>
                            <button className={`px-3 py-1 text-xs rounded ${isSelected ? 'bg-gray-200 text-gray-700' : 'bg-black text-white'}`} onClick={() => addCustomProduct(product.id)} disabled={isSelected}>
                              {isSelected ? 'Added' : 'Add'}
                            </button>
                          </div>
                        </div>;
                })}
                    {filteredCustomProducts.length === 0 && <div className="text-center py-6">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Package size={20} className="text-gray-400" />
                        </div>
                        <h3 className="font-medium mb-1">No services found</h3>
                        <p className="text-sm text-gray-500">
                          Try adjusting your search or filters
                        </p>
                      </div>}
                  </div>
                </div>
                <div className="p-4 border-t border-gray-200 flex justify-end">
                  <button onClick={() => setShowCustomProductDrawer(false)} className="px-4 py-2 bg-black text-white rounded-md text-sm">
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>}
    </div>;
}