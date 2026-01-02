import React from 'react';
import { Container, Text, Card, Stack, Badge, Button } from './DesignSystem';

// Helper to navigate pages
const navigateTo = (page) => {
  window.dispatchEvent(new CustomEvent('navigate', { detail: { page } }));
};

export const OverviewPage = () => {
  return (
    <Container>
      <div className="py-12 animate-fade-in">
        <Badge variant="warning" className="mb-4">Demo Only</Badge>
        <Text variant="h1" className="mb-4">
          Nona Overview
        </Text>
        <div className="bg-yellow-900/20 border border-yellow-700 rounded-lg p-4 mb-6 max-w-3xl">
          <Text variant="body" className="text-yellow-300">
            ⚠️ This is all just a demo and not a real digital product interface.
          </Text>
        </div>
        <Text variant="body" className="text-lg mb-8 max-w-3xl">
          A comprehensive design system that prioritizes hierarchy, spacing, and refined interactions. 
          Built for products that need to communicate confidence without being loud.
        </Text>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <Card className="p-6  ">
            <Text variant="h3" className="mb-3 ">Philosophy</Text>
            <Text variant="body" className="">
              This system doesn't need to prove anything; it already knows it's correct. 
              Every element is carefully considered, every spacing decision intentional.
              We believe that great design is invisible—it guides without getting in the way.
            </Text>
          </Card>

          <Card className="p-6  ">
            <Text variant="h3" className="mb-3 ">Principles</Text>
            <Stack spacing="3">
              <div>
                <Text variant="body" weight="semibold" className="">Hierarchy First</Text>
                <Text variant="small" className="">Clear visual order guides users naturally</Text>
              </div>
              <div>
                <Text variant="body" weight="semibold" className="">Breathing Room</Text>
                <Text variant="small" className="">Consistent spacing creates rhythm</Text>
              </div>
              <div>
                <Text variant="body" weight="semibold" className="">Subtle Motion</Text>
                <Text variant="small" className="">Interactions feel natural and refined</Text>
              </div>
            </Stack>
          </Card>

          <Card className="p-6  ">
            <Text variant="h3" className="mb-3 ">Usage</Text>
            <Text variant="body" className="mb-4 ">
              Perfect for SaaS products, dashboards, enterprise applications, and any digital product 
              that values clarity and sophistication.
            </Text>
            <Button variant="secondary" size="sm" onClick={() => navigateTo('resources')}>Learn More</Button>
          </Card>

          <Card className="p-6  ">
            <Text variant="h3" className="mb-3 ">Accessibility</Text>
            <Text variant="body" className="">
              Built with WCAG 2.1 AA compliance in mind. Proper focus states, semantic HTML, 
              and keyboard navigation throughout.
            </Text>
          </Card>
        </div>

        {/* Core Features Section */}
        <div className="mt-20">
          <Badge variant="primary" className="mb-4">Core Features</Badge>
          <Text variant="h2" className="mb-6 ">
            Everything You Need to Build
          </Text>
          <Text variant="body" className="text-lg mb-12 max-w-3xl ">
            Nona provides a complete toolkit for building modern digital products with confidence and clarity.
          </Text>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6  ">
              <div className="w-12 h-12 bg-blue-900/30 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-500 rounded"></div>
              </div>
              <Text variant="h4" className="mb-3 ">Component Library</Text>
              <Text variant="body" className="">
                Over 30+ production-ready components that work seamlessly together. Each component is crafted 
                with attention to detail and supports both light and dark modes out of the box.
              </Text>
            </Card>

            <Card className="p-6  ">
              <div className="w-12 h-12 bg-green-900/30 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-6 h-6 bg-green-500 rounded"></div>
              </div>
              <Text variant="h4" className="mb-3 ">Design Tokens</Text>
              <Text variant="body" className="">
                A comprehensive system of design tokens ensures consistency across your entire product. 
                From colors to spacing, typography to shadows—everything is systematized.
              </Text>
            </Card>

            <Card className="p-6  ">
              <div className="w-12 h-12 bg-yellow-900/30 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-6 h-6 bg-yellow-500 rounded"></div>
              </div>
              <Text variant="h4" className="mb-3 ">Responsive Design</Text>
              <Text variant="body" className="">
                Built with mobile-first principles, every component adapts beautifully to any screen size. 
                Your product will look great on phones, tablets, and desktops.
              </Text>
            </Card>

            <Card className="p-6  ">
              <div className="w-12 h-12 bg-red-900/30 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-6 h-6 bg-red-500 rounded"></div>
              </div>
              <Text variant="h4" className="mb-3 ">Dark Mode Support</Text>
              <Text variant="body" className="">
                Every component fully supports dark mode with carefully chosen colors that maintain 
                proper contrast and readability. Switch themes with a single click.
              </Text>
            </Card>

            <Card className="p-6  ">
              <div className="w-12 h-12 bg-blue-900/30 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-500 rounded"></div>
              </div>
              <Text variant="h4" className="mb-3 ">TypeScript Ready</Text>
              <Text variant="body" className="">
                Full TypeScript support with proper type definitions for all components. Get autocomplete 
                and type checking in your IDE for a better development experience.
              </Text>
            </Card>

            <Card className="p-6  ">
              <div className="w-12 h-12 bg-green-900/30 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-6 h-6 bg-green-500 rounded"></div>
              </div>
              <Text variant="h4" className="mb-3 ">Performance Optimized</Text>
              <Text variant="body" className="">
                Built with performance in mind. Tree-shakeable components, optimized CSS, and lazy loading 
                support ensure your app stays fast as it grows.
              </Text>
            </Card>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="mt-20">
          <Badge variant="success" className="mb-4">Use Cases</Badge>
          <Text variant="h2" className="mb-6 ">
            Built for Modern Products
          </Text>
          
          <div className="space-y-6">
            <Card className="p-8  ">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <Text variant="h3" className="mb-4 ">SaaS Applications</Text>
                  <Text variant="body" className=" mb-4">
                    Perfect for building software-as-a-service products that need to feel professional and trustworthy. 
                    The component library includes everything from authentication flows to complex data tables.
                  </Text>
                  <Text variant="body" className="">
                    Examples: Project management tools, CRM systems, analytics platforms, collaboration software.
                  </Text>
                </div>
                <div className="w-full md:w-1/3 bg-neutral-900 border border-neutral-700 rounded-lg p-6 flex items-center justify-center">
                  <Text variant="body" className="text-neutral-500">Visual Placeholder</Text>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex flex-col md:flex-row-reverse gap-8">
                <div className="flex-1">
                  <Text variant="h3" className="mb-4 ">Enterprise Dashboards</Text>
                  <Text variant="body" className=" mb-4">
                    Create data-rich dashboards that communicate complex information clearly. Built-in components 
                    for charts, metrics, and data visualization make it easy to present insights effectively.
                  </Text>
                  <Text variant="body" className="">
                    Examples: Business intelligence tools, monitoring systems, admin panels, reporting interfaces.
                  </Text>
                </div>
                <div className="w-full md:w-1/3 bg-neutral-900 border border-neutral-700 rounded-lg p-6 flex items-center justify-center">
                  <Text variant="body" className="text-neutral-500">Visual Placeholder</Text>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <Text variant="h3" className="mb-4 ">Consumer Applications</Text>
                  <Text variant="body" className=" mb-4">
                    Build consumer-facing apps that feel polished and intuitive. The design system's focus on 
                    hierarchy and clarity makes it easy for users to accomplish their goals quickly.
                  </Text>
                  <Text variant="body" className="">
                    Examples: E-commerce platforms, social networks, productivity apps, content management systems.
                  </Text>
                </div>
                <div className="w-full md:w-1/3 bg-neutral-900 border border-neutral-700 rounded-lg p-6 flex items-center justify-center">
                  <Text variant="body" className="text-neutral-500">Visual Placeholder</Text>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <Card className="p-12  ">
            <Text variant="h2" className="mb-12 text-center ">
              Trusted by Teams Worldwide
            </Text>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <Text variant="h1" className="mb-2 ">30+</Text>
                <Text variant="body" className="">Components</Text>
              </div>
              <div className="text-center">
                <Text variant="h1" className="mb-2 ">500+</Text>
                <Text variant="body" className="">Design Tokens</Text>
              </div>
              <div className="text-center">
                <Text variant="h1" className="mb-2 ">100%</Text>
                <Text variant="body" className="">Accessible</Text>
              </div>
              <div className="text-center">
                <Text variant="h1" className="mb-2 ">2</Text>
                <Text variant="body" className="">Themes</Text>
              </div>
            </div>
          </Card>
        </div>

        {/* Getting Started CTA */}
        <div className="mt-20">
          <Card className="p-12 text-center  ">
            <Badge variant="primary" className="mb-4">Get Started</Badge>
            <Text variant="h2" className="mb-4 ">
              Ready to Build?
            </Text>
            <Text variant="body" className="text-lg mb-8 max-w-2xl mx-auto ">
              Explore the component library, dive into the design tokens, or jump straight into building 
              your next product with Nona.
            </Text>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button variant="primary" onClick={() => navigateTo('components')}>
                View Components
              </Button>
              <Button variant="secondary" onClick={() => navigateTo('tokens')}>
                Design Tokens
              </Button>
              <Button variant="ghost" onClick={() => navigateTo('resources')}>
                Documentation
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export const ComponentsPage = () => {
  return (
    <Container>
      <div className="py-12 animate-fade-in">
        <Badge variant="primary" className="mb-4">Components</Badge>
        <Text variant="h1" className="mb-4 ">
          Component Library
        </Text>
        <Text variant="body" className="text-lg mb-8 max-w-3xl ">
          A complete set of reusable components designed for modern applications. 
          Each component follows the same principles of hierarchy and refinement.
        </Text>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Button', 'Card', 'Input', 'Badge', 'Divider', 'Container', 'Stack', 'Text', 'IconButton'].map((comp) => (
            <Card key={comp} className="p-6  ">
              <Badge variant="neutral" size="sm" className="mb-3">{comp}</Badge>
              <Text variant="h4" className="mb-2 ">{comp} Component</Text>
              <Text variant="body" className="text-sm ">
                Flexible and customizable {comp.toLowerCase()} with full dark mode support and accessibility features.
              </Text>
            </Card>
          ))}
        </div>

        {/* Button Variants Section */}
        <div className="mt-20">
          <Text variant="h2" className="mb-6 ">Button Variants</Text>
          <Card className="p-8  ">
            <Text variant="body" className="mb-6 ">
              Buttons come in multiple variants to communicate different levels of importance and actions. 
              Each variant maintains consistent interaction patterns while providing clear visual hierarchy.
            </Text>
            
            <div className="space-y-8">
              <div>
                <Text variant="h4" className="mb-4 ">Primary Actions</Text>
                <div className="flex gap-4 flex-wrap">
                  <Button variant="primary" size="sm" onClick={() => alert('Primary Small')}>Small</Button>
                  <Button variant="primary" size="md" onClick={() => alert('Primary Medium')}>Medium</Button>
                  <Button variant="primary" size="lg" onClick={() => alert('Primary Large')}>Large</Button>
                </div>
                <Text variant="small" className="mt-3 ">
                  Use primary buttons for the main action on a page. There should typically only be one primary button visible at a time.
                </Text>
              </div>

              <div>
                <Text variant="h4" className="mb-4 ">Secondary Actions</Text>
                <div className="flex gap-4 flex-wrap">
                  <Button variant="secondary" size="sm" onClick={() => alert('Secondary Small')}>Small</Button>
                  <Button variant="secondary" size="md" onClick={() => alert('Secondary Medium')}>Medium</Button>
                  <Button variant="secondary" size="lg" onClick={() => alert('Secondary Large')}>Large</Button>
                </div>
                <Text variant="small" className="mt-3 ">
                  Secondary buttons are for less prominent actions that still need emphasis, like "Cancel" or "Back" actions.
                </Text>
              </div>

              <div>
                <Text variant="h4" className="mb-4 ">Ghost Actions</Text>
                <div className="flex gap-4 flex-wrap">
                  <Button variant="ghost" size="sm" onClick={() => alert('Ghost Small')}>Small</Button>
                  <Button variant="ghost" size="md" onClick={() => alert('Ghost Medium')}>Medium</Button>
                  <Button variant="ghost" size="lg" onClick={() => alert('Ghost Large')}>Large</Button>
                </div>
                <Text variant="small" className="mt-3 ">
                  Ghost buttons are minimal and blend with the interface. Use them for tertiary actions or when space is limited.
                </Text>
              </div>

              <div>
                <Text variant="h4" className="mb-4 ">Danger Actions</Text>
                <div className="flex gap-4 flex-wrap">
                  <Button variant="danger" size="sm" onClick={() => alert('Are you sure?')}>Small</Button>
                  <Button variant="danger" size="md" onClick={() => alert('Are you sure?')}>Medium</Button>
                  <Button variant="danger" size="lg" onClick={() => alert('Are you sure?')}>Large</Button>
                </div>
                <Text variant="small" className="mt-3 ">
                  Danger buttons communicate destructive actions like delete, remove, or cancel. Always confirm before executing.
                </Text>
              </div>
            </div>
          </Card>
        </div>

        {/* Form Components Section */}
        <div className="mt-20">
          <Text variant="h2" className="mb-6 ">Form Components</Text>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6  ">
              <Text variant="h3" className="mb-4 ">Text Input</Text>
              <Text variant="body" className="mb-4 ">
                Versatile text input component with support for labels, helper text, error states, and disabled states.
              </Text>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Default Input</label>
                  <input 
                    type="text" 
                    placeholder="Enter text..." 
                    className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-md text-white placeholder-neutral-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">With Helper Text</label>
                  <input 
                    type="email" 
                    placeholder="email@example.com" 
                    className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-md text-white placeholder-neutral-500"
                  />
                  <Text variant="caption" className="mt-1 ">We'll never share your email.</Text>
                </div>
              </div>
            </Card>

            <Card className="p-6  ">
              <Text variant="h3" className="mb-4 ">Textarea</Text>
              <Text variant="body" className="mb-4 ">
                Multi-line text input perfect for longer content like descriptions, comments, or feedback.
              </Text>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Description</label>
                  <textarea 
                    placeholder="Enter a detailed description..." 
                    rows="4"
                    className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-md text-white placeholder-neutral-500 resize-none"
                  />
                  <Text variant="caption" className="mt-1 ">Maximum 500 characters</Text>
                </div>
              </div>
            </Card>

            <Card className="p-6  ">
              <Text variant="h3" className="mb-4 ">Checkbox & Radio</Text>
              <Text variant="body" className="mb-4 ">
                Selection controls for choosing single or multiple options from a set.
              </Text>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4" />
                    <Text variant="body" className="">Subscribe to newsletter</Text>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4" />
                    <Text variant="body" className="">Accept terms and conditions</Text>
                  </label>
                </div>
              </div>
            </Card>

            <Card className="p-6  ">
              <Text variant="h3" className="mb-4 ">Select Dropdown</Text>
              <Text variant="body" className="mb-4 ">
                Dropdown menus for selecting from a list of options. Supports single and multi-select modes.
              </Text>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-white">Country</label>
                  <select className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-md text-white">
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Canada</option>
                    <option>Australia</option>
                  </select>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Layout Components Section */}
        <div className="mt-20">
          <Text variant="h2" className="mb-6 ">Layout Components</Text>
          <Card className="p-8  ">
            <Text variant="body" className="mb-8 ">
              Layout components help structure your interface with consistent spacing and alignment. 
              They form the foundation for building complex UIs that maintain visual harmony.
            </Text>

            <div className="space-y-12">
              <div>
                <Text variant="h3" className="mb-4 ">Container</Text>
                <Text variant="body" className="mb-4 ">
                  Container provides consistent max-width and horizontal padding for page content. 
                  It ensures your content doesn't stretch too wide on large screens while maintaining 
                  proper spacing on smaller devices.
                </Text>
                <div className="p-6 bg-neutral-900 rounded-lg">
                  <div className="max-w-6xl mx-auto px-6 py-4 bg-white rounded border border-neutral-700">
                    <Text variant="body" className="">Content inside container</Text>
                  </div>
                </div>
              </div>

              <div>
                <Text variant="h3" className="mb-4 ">Stack</Text>
                <Text variant="body" className="mb-4 ">
                  Stack creates vertical or horizontal layouts with consistent spacing between children. 
                  It eliminates the need for manual margin calculations and ensures spacing remains consistent.
                </Text>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-neutral-900 rounded-lg">
                    <Text variant="small" className="mb-3">Vertical Stack (spacing: 4)</Text>
                    <div className="space-y-4">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="p-4 bg-white rounded border border-neutral-700">
                          <Text variant="body" className="">Item {i}</Text>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 bg-neutral-900 rounded-lg">
                    <Text variant="small" className="mb-3">Horizontal Stack (spacing: 3)</Text>
                    <div className="flex gap-3">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="flex-1 p-4 bg-white rounded border border-neutral-700">
                          <Text variant="body" className="">Item {i}</Text>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Text variant="h3" className="mb-4 ">Card</Text>
                <Text variant="body" className="mb-4 ">
                  Cards group related content with consistent borders, padding, and shadows. They're perfect 
                  for containing distinct pieces of information or actionable items.
                </Text>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="p-6  ">
                    <Text variant="h4" className="mb-2 ">Default Card</Text>
                    <Text variant="body" className="">Standard card with border</Text>
                  </Card>
                  <Card elevated className="p-6  ">
                    <Text variant="h4" className="mb-2 ">Elevated Card</Text>
                    <Text variant="body" className="">Card with shadow</Text>
                  </Card>
                  <Card interactive className="p-6  ">
                    <Text variant="h4" className="mb-2 ">Interactive Card</Text>
                    <Text variant="body" className="">Clickable with hover state</Text>
                  </Card>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Feedback Components Section */}
        <div className="mt-20">
          <Text variant="h2" className="mb-6 ">Feedback Components</Text>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6  ">
              <Text variant="h3" className="mb-4 ">Badges</Text>
              <Text variant="body" className="mb-4 ">
                Small status indicators that draw attention to specific items or communicate state.
              </Text>
              <div className="flex gap-3 flex-wrap">
                <Badge variant="primary" className="bg-blue-900 text-blue-200 border-blue-700">Primary</Badge>
                <Badge variant="secondary" className="bg-purple-900 text-purple-200 border-purple-700">Secondary</Badge>
                <Badge variant="success" className="bg-green-900 text-green-200 border-green-700">Success</Badge>
                <Badge variant="warning" className="bg-yellow-900 text-yellow-200 border-yellow-700">Warning</Badge>
                <Badge variant="error" className="bg-red-900 text-red-200 border-red-700">Error</Badge>
                <Badge variant="neutral" className="bg-gray-800 text-gray-200 border-gray-700">Neutral</Badge>
              </div>
              <div className="mt-4 flex gap-3 flex-wrap">
                <Badge variant="primary" size="sm" className="bg-blue-900 text-blue-200 border-blue-700">Small</Badge>
                <Badge variant="primary" size="md" className="bg-blue-900 text-blue-200 border-blue-700">Medium</Badge>
                <Badge variant="primary" size="lg" className="bg-blue-900 text-blue-200 border-blue-700">Large</Badge>
              </div>
            </Card>

            <Card className="p-6  ">
              <Text variant="h3" className="mb-4 ">Dividers</Text>
              <Text variant="body" className="mb-4 ">
                Visual separators that help organize content into logical sections.
              </Text>
              <div className="space-y-4">
                <div>
                  <Text variant="body" className="mb-2 ">Section One</Text>
                  <div className="h-px bg-neutral-300 dark:bg-neutral-700"></div>
                </div>
                <div>
                  <Text variant="body" className="mb-2 ">Section Two</Text>
                  <div className="h-px bg-neutral-300 dark:bg-neutral-700"></div>
                </div>
                <div>
                  <Text variant="body" className="">Section Three</Text>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Best Practices Section */}
        <div className="mt-20">
          <Badge variant="success" className="mb-4">Best Practices</Badge>
          <Text variant="h2" className="mb-6 ">Component Guidelines</Text>
          <Card className="p-8  ">
            <div className="space-y-8">
              <div>
                <Text variant="h3" className="mb-3 ">Composition Over Complexity</Text>
                <Text variant="body" className="">
                  Build complex interfaces by composing simple components rather than creating 
                  overly complex single components. This approach improves maintainability and reusability.
                </Text>
              </div>
              <div>
                <Text variant="h3" className="mb-3 ">Consistent Spacing</Text>
                <Text variant="body" className="">
                  Always use the spacing system for margins and padding. This creates visual rhythm 
                  and makes your interface feel cohesive. Avoid arbitrary spacing values.
                </Text>
              </div>
              <div>
                <Text variant="h3" className="mb-3 ">Accessibility First</Text>
                <Text variant="body" className="">
                  Every component is built with accessibility in mind. Maintain proper contrast ratios, 
                  use semantic HTML, provide ARIA labels where needed, and test with keyboard navigation.
                </Text>
              </div>
              <div>
                <Text variant="h3" className="mb-3 ">Performance Matters</Text>
                <Text variant="body" className="">
                  Import only the components you need to keep bundle sizes small. Use code splitting 
                  for larger applications and lazy load components that aren't immediately visible.
                </Text>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export const TokensPage = () => {
  return (
    <Container>
      <div className="py-12 animate-fade-in">
        <Badge variant="success" className="mb-4">Design Tokens</Badge>
        <Text variant="h1" className="mb-4 ">
          Design Tokens
        </Text>
        <Text variant="body" className="text-lg mb-8 max-w-3xl ">
          The foundation of Nona. These tokens ensure consistency across the entire system, 
          from colors and typography to spacing and shadows.
        </Text>

        <div className="space-y-8">
          <Card className="p-6  ">
            <Text variant="h3" className="mb-4 ">Color Palette</Text>
            <Text variant="body" className="mb-6 ">
              A carefully crafted neutral color palette that works beautifully in both light and dark modes. 
              Each shade is designed to maintain proper contrast and readability.
            </Text>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'].map((shade) => (
                <div key={shade}>
                  <div className={`h-16 rounded-md bg-neutral-${shade} border border-neutral-700`}></div>
                  <Text variant="caption" className="mt-2 ">neutral-{shade}</Text>
                </div>
              ))}
            </div>
          </Card>

          {/* Semantic Colors */}
          <Card className="p-6  ">
            <Text variant="h3" className="mb-4 ">Semantic Colors</Text>
            <Text variant="body" className="mb-6 ">
              Purpose-driven colors that communicate meaning instantly. Use these for feedback, 
              status indicators, and call-to-action elements.
            </Text>
            
            <div className="space-y-6">
              <div>
                <Text variant="h4" className="mb-3 ">Primary</Text>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                  <div className="text-center">
                    <div className="h-12 rounded-md bg-blue-50 border border-neutral-700"></div>
                    <Text variant="caption" className="mt-1 ">50</Text>
                  </div>
                  <div className="text-center">
                    <div className="h-12 rounded-md bg-blue-100 border border-neutral-700"></div>
                    <Text variant="caption" className="mt-1 ">100</Text>
                  </div>
                  <div className="text-center">
                    <div className="h-12 rounded-md bg-blue-200 border border-neutral-700"></div>
                    <Text variant="caption" className="mt-1 ">200</Text>
                  </div>
                  <div className="text-center">
                    <div className="h-12 rounded-md bg-blue-300 border border-neutral-700"></div>
                    <Text variant="caption" className="mt-1 ">300</Text>
                  </div>
                  <div className="text-center">
                    <div className="h-12 rounded-md bg-blue-400 border border-neutral-700"></div>
                    <Text variant="caption" className="mt-1 ">400</Text>
                  </div>
                  <div className="text-center">
                    <div className="h-12 rounded-md bg-blue-500 border border-neutral-700"></div>
                    <Text variant="caption" className="mt-1 ">500</Text>
                  </div>
                </div>
                <Text variant="small" className="mt-3 ">
                  Used for primary actions, links, and focus states. Primary-500 is the main brand color.
                </Text>
              </div>

              <div>
                <Text variant="h4" className="mb-3 ">Success</Text>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                  <div className="text-center">
                    <div className="h-12 rounded-md bg-green-50 border border-neutral-700"></div>
                    <Text variant="caption" className="mt-1 ">50</Text>
                  </div>
                  <div className="text-center">
                    <div className="h-12 rounded-md bg-green-100 border border-neutral-700"></div>
                    <Text variant="caption" className="mt-1 ">100</Text>
                  </div>
                  <div className="text-center">
                    <div className="h-12 rounded-md bg-green-200 border border-neutral-700"></div>
                    <Text variant="caption" className="mt-1 ">200</Text>
                  </div>
                  <div className="text-center">
                    <div className="h-12 rounded-md bg-green-300 border border-neutral-700"></div>
                    <Text variant="caption" className="mt-1 ">300</Text>
                  </div>
                  <div className="text-center">
                    <div className="h-12 rounded-md bg-green-400 border border-neutral-700"></div>
                    <Text variant="caption" className="mt-1 ">400</Text>
                  </div>
                  <div className="text-center">
                    <div className="h-12 rounded-md bg-green-500 border border-neutral-700"></div>
                    <Text variant="caption" className="mt-1 ">500</Text>
                  </div>
                </div>
                <Text variant="small" className="mt-3 ">
                  Indicates successful operations, positive states, and completed actions.
                </Text>
              </div>

              <div>
                <Text variant="h4" className="mb-3 ">Warning</Text>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                  <div className="text-center">
                    <div className="h-12 rounded-md bg-yellow-50 border border-neutral-700"></div>
                    <Text variant="caption" className="mt-1 ">50</Text>
                  </div>
                  <div className="text-center">
                    <div className="h-12 rounded-md bg-yellow-100 border border-neutral-700"></div>
                    <Text variant="caption" className="mt-1 ">100</Text>
                  </div>
                  <div className="text-center">
                    <div className="h-12 rounded-md bg-yellow-200 border border-neutral-700"></div>
                    <Text variant="caption" className="mt-1 ">200</Text>
                  </div>
                  <div className="text-center">
                    <div className="h-12 rounded-md bg-yellow-300 border border-neutral-700"></div>
                    <Text variant="caption" className="mt-1 ">300</Text>
                  </div>
                  <div className="text-center">
                    <div className="h-12 rounded-md bg-yellow-400 border border-neutral-700"></div>
                    <Text variant="caption" className="mt-1 ">400</Text>
                  </div>
                  <div className="text-center">
                    <div className="h-12 rounded-md bg-yellow-500 border border-neutral-700"></div>
                    <Text variant="caption" className="mt-1 ">500</Text>
                  </div>
                </div>
                <Text variant="small" className="mt-3 ">
                  Communicates caution, alerts that need attention, and potentially reversible errors.
                </Text>
              </div>

              <div>
                <Text variant="h4" className="mb-3 ">Error</Text>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                  <div className="text-center">
                    <div className="h-12 rounded-md bg-red-50 border border-neutral-700"></div>
                    <Text variant="caption" className="mt-1 ">50</Text>
                  </div>
                  <div className="text-center">
                    <div className="h-12 rounded-md bg-red-100 border border-neutral-700"></div>
                    <Text variant="caption" className="mt-1 ">100</Text>
                  </div>
                  <div className="text-center">
                    <div className="h-12 rounded-md bg-red-200 border border-neutral-700"></div>
                    <Text variant="caption" className="mt-1 ">200</Text>
                  </div>
                  <div className="text-center">
                    <div className="h-12 rounded-md bg-red-300 border border-neutral-700"></div>
                    <Text variant="caption" className="mt-1 ">300</Text>
                  </div>
                  <div className="text-center">
                    <div className="h-12 rounded-md bg-red-400 border border-neutral-700"></div>
                    <Text variant="caption" className="mt-1 ">400</Text>
                  </div>
                  <div className="text-center">
                    <div className="h-12 rounded-md bg-red-500 border border-neutral-700"></div>
                    <Text variant="caption" className="mt-1 ">500</Text>
                  </div>
                </div>
                <Text variant="small" className="mt-3 ">
                  Indicates errors, destructive actions, and critical issues that need immediate attention.
                </Text>
              </div>
            </div>
          </Card>

          {/* Typography Scale */}
          <Card className="p-6  ">
            <Text variant="h3" className="mb-4 ">Typography Scale</Text>
            <Text variant="body" className="mb-6 ">
              A modular type scale that creates clear hierarchy and rhythm. Each size is calculated 
              to work harmoniously with the spacing system.
            </Text>
            <Stack spacing="6">
              <div>
                <Text variant="h1" className="">The Quick Brown Fox</Text>
                <div className="mt-2 flex items-center gap-4">
                  <Badge variant="neutral" size="sm">H1</Badge>
                  <Text variant="caption" className="">3.75rem / 60px · Font Weight: 700</Text>
                </div>
                <Text variant="small" className="mt-2 ">
                  Reserved for page titles and hero sections. Use sparingly for maximum impact.
                </Text>
              </div>
              <div>
                <Text variant="h2" className="">The Quick Brown Fox</Text>
                <div className="mt-2 flex items-center gap-4">
                  <Badge variant="neutral" size="sm">H2</Badge>
                  <Text variant="caption" className="">3rem / 48px · Font Weight: 700</Text>
                </div>
                <Text variant="small" className="mt-2 ">
                  Section headings and major content divisions. Creates strong visual hierarchy.
                </Text>
              </div>
              <div>
                <Text variant="h3" className="">The Quick Brown Fox</Text>
                <div className="mt-2 flex items-center gap-4">
                  <Badge variant="neutral" size="sm">H3</Badge>
                  <Text variant="caption" className="">2.25rem / 36px · Font Weight: 600</Text>
                </div>
                <Text variant="small" className="mt-2 ">
                  Subsection headings and card titles. Balances presence with flexibility.
                </Text>
              </div>
              <div>
                <Text variant="h4" className="">The Quick Brown Fox</Text>
                <div className="mt-2 flex items-center gap-4">
                  <Badge variant="neutral" size="sm">H4</Badge>
                  <Text variant="caption" className="">1.5rem / 24px · Font Weight: 600</Text>
                </div>
                <Text variant="small" className="mt-2 ">
                  Component headings and list titles. Maintains hierarchy without overwhelming.
                </Text>
              </div>
              <div>
                <Text variant="body" className="">The Quick Brown Fox Jumps Over the Lazy Dog</Text>
                <div className="mt-2 flex items-center gap-4">
                  <Badge variant="neutral" size="sm">Body</Badge>
                  <Text variant="caption" className="">1rem / 16px · Font Weight: 400</Text>
                </div>
                <Text variant="small" className="mt-2 ">
                  Primary text for paragraphs, descriptions, and main content. Optimized for readability.
                </Text>
              </div>
              <div>
                <Text variant="small" className="">The Quick Brown Fox Jumps Over the Lazy Dog</Text>
                <div className="mt-2 flex items-center gap-4">
                  <Badge variant="neutral" size="sm">Small</Badge>
                  <Text variant="caption" className="">0.875rem / 14px · Font Weight: 400</Text>
                </div>
                <Text variant="small" className="mt-2 ">
                  Secondary information, helper text, and metadata. Use for supporting details.
                </Text>
              </div>
              <div>
                <Text variant="caption" className="">The Quick Brown Fox Jumps Over the Lazy Dog</Text>
                <div className="mt-2 flex items-center gap-4">
                  <Badge variant="neutral" size="sm">Caption</Badge>
                  <Text variant="caption" className="">0.75rem / 12px · Font Weight: 400</Text>
                </div>
                <Text variant="small" className="mt-2 ">
                  Captions, labels, and fine print. Smallest readable size in the system.
                </Text>
              </div>
            </Stack>
          </Card>

          {/* Font Weights */}
          <Card className="p-6  ">
            <Text variant="h3" className="mb-4 ">Font Weights</Text>
            <Text variant="body" className="mb-6 ">
              Strategic use of font weight creates hierarchy without relying solely on size. 
              Each weight serves a specific purpose in the typographic system.
            </Text>
            <Stack spacing="4">
              <div className="flex items-center justify-between p-4 border border-neutral-700 rounded-lg">
                <Text variant="body" weight="normal" className="">Normal (400)</Text>
                <Text variant="small" className="">Body text, descriptions</Text>
              </div>
              <div className="flex items-center justify-between p-4 border border-neutral-700 rounded-lg">
                <Text variant="body" weight="medium" className="">Medium (500)</Text>
                <Text variant="small" className="">Emphasis, labels</Text>
              </div>
              <div className="flex items-center justify-between p-4 border border-neutral-700 rounded-lg">
                <Text variant="body" weight="semibold" className="">Semibold (600)</Text>
                <Text variant="small" className="">Subheadings, buttons</Text>
              </div>
              <div className="flex items-center justify-between p-4 border border-neutral-700 rounded-lg">
                <Text variant="body" weight="bold" className="">Bold (700)</Text>
                <Text variant="small" className="">Headings, strong emphasis</Text>
              </div>
            </Stack>
          </Card>

          {/* Spacing System */}
          <Card className="p-6  ">
            <Text variant="h3" className="mb-4 ">Spacing System</Text>
            <Text variant="body" className="mb-6 ">
              Based on an 8px grid for consistent rhythm throughout the interface. This system 
              creates predictable spacing patterns that feel natural and harmonious.
            </Text>
            <div className="space-y-3">
              {[
                { value: '0.5', px: '2px', usage: 'Tight spacing, inline elements' },
                { value: '1', px: '4px', usage: 'Very compact layouts' },
                { value: '2', px: '8px', usage: 'Related elements, small gaps' },
                { value: '3', px: '12px', usage: 'Form fields, list items' },
                { value: '4', px: '16px', usage: 'Card padding, section spacing' },
                { value: '6', px: '24px', usage: 'Component spacing, larger gaps' },
                { value: '8', px: '32px', usage: 'Section dividers, major spacing' },
                { value: '12', px: '48px', usage: 'Page sections, hero spacing' },
                { value: '16', px: '64px', usage: 'Large sections, dramatic spacing' },
                { value: '20', px: '80px', usage: 'Maximum spacing, landing pages' },
              ].map((space) => (
                <div key={space.value} className="flex items-center gap-4 p-3 border border-neutral-700 rounded-lg">
                  <div className={`h-8 bg-blue-500 rounded`} style={{ width: space.px }}></div>
                  <div className="flex-1 grid grid-cols-3 gap-4">
                    <Text variant="small" weight="semibold" className="">spacing-{space.value}</Text>
                    <Text variant="small" className="">{space.px}</Text>
                    <Text variant="small" className="">{space.usage}</Text>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Border Radius */}
          <Card className="p-6  ">
            <Text variant="h3" className="mb-4 ">Border Radius</Text>
            <Text variant="body" className="mb-6 ">
              Consistent corner rounding creates a cohesive visual language. Use larger radius values 
              for prominent elements and smaller values for subtle refinement.
            </Text>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'None', value: '0px', class: 'rounded-none' },
                { name: 'Small', value: '4px', class: 'rounded' },
                { name: 'Medium', value: '8px', class: 'rounded-lg' },
                { name: 'Large', value: '12px', class: 'rounded-xl' },
                { name: 'XLarge', value: '16px', class: 'rounded-2xl' },
                { name: 'Full', value: '9999px', class: 'rounded-full' },
              ].map((radius) => (
                <div key={radius.name} className="text-center">
                  <div className={`h-20 w-20 mx-auto bg-blue-500 ${radius.class} mb-3`}></div>
                  <Text variant="small" weight="semibold" className="">{radius.name}</Text>
                  <Text variant="caption" className="">{radius.value}</Text>
                </div>
              ))}
            </div>
          </Card>

          {/* Shadows */}
          <Card className="p-6  ">
            <Text variant="h3" className="mb-4 ">Shadow System</Text>
            <Text variant="body" className="mb-6 ">
              Subtle shadows create depth and hierarchy without being distracting. Use shadows 
              to elevate interactive elements and distinguish content layers.
            </Text>
            <div className="bg-neutral-900 p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { name: 'Small', class: 'shadow-sm', usage: 'Slight elevation, subtle depth' },
                  { name: 'Medium', class: 'shadow-md', usage: 'Cards, dropdowns, modals' },
                  { name: 'Large', class: 'shadow-lg', usage: 'Floating elements, important UI' },
                  { name: 'XLarge', class: 'shadow-xl', usage: 'Dialogs, prominent overlays' },
                ].map((shadow) => (
                  <div key={shadow.name} className="text-center">
                    <div className={`h-40 bg-white ${shadow.class} rounded-lg mb-4 flex items-center justify-center`}>
                      <Text variant="body" weight="bold" className="text-black">{shadow.name}</Text>
                    </div>
                    <Text variant="small" className="">{shadow.usage}</Text>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Usage Guidelines */}
          <Card className="p-6  ">
            <Text variant="h3" className="mb-4 ">Usage Guidelines</Text>
            <div className="space-y-6">
              <div>
                <Text variant="h4" className="mb-2 ">Consistency is Key</Text>
                <Text variant="body" className="">
                  Always use tokens instead of arbitrary values. This ensures your design remains consistent 
                  and makes future updates easier. If you need a new value, consider adding it to the system.
                </Text>
              </div>
              <div>
                <Text variant="h4" className="mb-2 ">Semantic Over Decorative</Text>
                <Text variant="body" className="">
                  Choose colors based on meaning, not just aesthetics. Success should always be green, 
                  errors red, warnings yellow. This creates predictable user experiences.
                </Text>
              </div>
              <div>
                <Text variant="h4" className="mb-2 ">Respect the Hierarchy</Text>
                <Text variant="body" className="">
                  Use the typography scale as intended. Don't skip levels or create arbitrary sizes. 
                  The system is designed to create natural information hierarchy.
                </Text>
              </div>
              <div>
                <Text variant="h4" className="mb-2 ">Test in Both Modes</Text>
                <Text variant="body" className="">
                  Always verify your designs work in both light and dark modes. Tokens are designed 
                  to maintain proper contrast and readability in all themes.
                </Text>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export const ResourcesPage = () => {
  return (
    <Container>
      <div className="py-12 animate-fade-in">
        <Badge variant="primary" className="mb-4">Resources</Badge>
        <Text variant="h1" className="mb-4 ">
          Resources & Learning
        </Text>
        <Text variant="body" className="text-lg mb-8 max-w-3xl ">
          Guides, documentation, and resources to help you master Nona and build exceptional digital products.
        </Text>

        <Stack spacing="6">
          <Card className="p-6  ">
            <Text variant="h3" className="mb-3 ">Documentation</Text>
            <Text variant="body" className="">
              Comprehensive guides covering all aspects of the Nona design system, from basic usage to advanced patterns.
              Explore the component library, design tokens, accessibility guidelines, and best practices for building with Nona.
            </Text>
          </Card>

          <Card className="p-6  ">
            <Text variant="h3" className="mb-3 ">Quick Start</Text>
            <Stack spacing="3">
              <div>
                <Text variant="body" weight="semibold" className="">1. Import Components</Text>
                <Text variant="small" className="">
                  Import the components you need from the design system
                </Text>
              </div>
              <div>
                <Text variant="body" weight="semibold" className="">2. Apply Tokens</Text>
                <Text variant="small" className="">
                  Use design tokens for consistent styling
                </Text>
              </div>
              <div>
                <Text variant="body" weight="semibold" className="">3. Build with Confidence</Text>
                <Text variant="small" className="">
                  Create refined interfaces that speak for themselves
                </Text>
              </div>
            </Stack>
          </Card>

          <Card className="p-6  ">
            <Text variant="h3" className="mb-3 ">Best Practices</Text>
            <ul className="list-disc list-inside space-y-2 dark:text-neutral-300">
              <li>Always maintain proper hierarchy</li>
              <li>Use the spacing system consistently</li>
              <li>Leverage subtle animations for feedback</li>
              <li>Ensure proper contrast ratios</li>
              <li>Test with keyboard navigation</li>
            </ul>
          </Card>
        </Stack>

        {/* Getting Started Guide */}
        <div className="mt-20">
          <Badge variant="success" className="mb-4">Getting Started</Badge>
          <Text variant="h2" className="mb-6 ">
            Installation & Setup
          </Text>

          <div className="space-y-6">
            <Card className="p-8  ">
              <Text variant="h3" className="mb-4 ">Installation</Text>
              <Text variant="body" className="mb-4 ">
                Get started with Nona in your project by installing the package via npm or yarn.
              </Text>
              <div className="bg-neutral-900 p-4 rounded-lg font-mono text-sm text-neutral-100 mb-4">
                <div>npm install @nona/design-system</div>
                <div className="mt-2 text-neutral-500"># or</div>
                <div>yarn add @nona/design-system</div>
              </div>
              <Text variant="small" className="">
                The package includes all components, design tokens, and TypeScript definitions.
              </Text>
            </Card>

            <Card className="p-8  ">
              <Text variant="h3" className="mb-4 ">Basic Configuration</Text>
              <Text variant="body" className="mb-4 ">
                Import the base styles in your main application file to enable the design tokens and global styles.
              </Text>
              <div className="bg-neutral-900 p-4 rounded-lg font-mono text-sm text-neutral-100 mb-4">
                <div className="text-blue-400">import</div>
                <div className="ml-4">'@nona/design-system/styles.css';</div>
                <div className="mt-2 text-blue-400">import</div>
                <div className="ml-4">{'{ Button, Card, Text }'}</div>
                <div className="ml-4 text-blue-400">from</div>
                <div className="ml-4">'@nona/design-system';</div>
              </div>
              <Text variant="small" className="">
                That's it! You're now ready to start using Nona components in your application.
              </Text>
            </Card>

            <Card className="p-8  ">
              <Text variant="h3" className="mb-4 ">Dark Mode Setup</Text>
              <Text variant="body" className="mb-4 ">
                Enable dark mode support by adding the dark class to your document root. Nona automatically 
                adapts all components when the dark class is present.
              </Text>
              <div className="bg-neutral-900 p-4 rounded-lg font-mono text-sm text-neutral-100 mb-4">
                <div className="text-neutral-500">// Toggle dark mode</div>
                <div className="text-blue-400">document</div>
                <div className="ml-4">.documentElement.classList</div>
                <div className="ml-4">.toggle('dark');</div>
              </div>
              <Text variant="small" className="">
                Components will automatically switch to their dark variants. No additional configuration needed.
              </Text>
            </Card>
          </div>
        </div>

        {/* Tutorials Section */}
        <div className="mt-20">
          <Badge variant="primary" className="mb-4">Tutorials</Badge>
          <Text variant="h2" className="mb-6 ">
            Learn by Building
          </Text>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6  ">
              <Badge variant="success" size="sm" className="mb-3">Beginner</Badge>
              <Text variant="h3" className="mb-3 ">Building Your First Page</Text>
              <Text variant="body" className="mb-4 ">
                Learn the fundamentals by creating a simple landing page. This tutorial covers layout 
                components, typography, and basic styling with design tokens.
              </Text>
              <Text variant="small" className="">
                Duration: 15 minutes • Topics: Container, Text, Button, Card
              </Text>
            </Card>

            <Card className="p-6  ">
              <Badge variant="success" size="sm" className="mb-3">Beginner</Badge>
              <Text variant="h3" className="mb-3 ">Creating Forms</Text>
              <Text variant="body" className="mb-4 ">
                Master form components including inputs, validation, error states, and submission handling. 
                Build a complete registration form from scratch.
              </Text>
              <Text variant="small" className="">
                Duration: 20 minutes • Topics: Input, Button, Form validation
              </Text>
            </Card>

            <Card className="p-6  ">
              <Badge variant="warning" size="sm" className="mb-3">Intermediate</Badge>
              <Text variant="h3" className="mb-3 ">Dashboard Layout</Text>
              <Text variant="body" className="mb-4 ">
                Build a complete dashboard with navigation, data cards, charts, and responsive layout. 
                Learn advanced composition techniques and state management.
              </Text>
              <Text variant="small" className="">
                Duration: 45 minutes • Topics: Layout, Cards, Stack, Grid
              </Text>
            </Card>

            <Card className="p-6  ">
              <Badge variant="warning" size="sm" className="mb-3">Intermediate</Badge>
              <Text variant="h3" className="mb-3 ">Custom Themes</Text>
              <Text variant="body" className="mb-4 ">
                Extend Nona with custom color palettes and brand-specific tokens. Learn how to override 
                defaults while maintaining system consistency.
              </Text>
              <Text variant="small" className="">
                Duration: 30 minutes • Topics: Design tokens, CSS variables
              </Text>
            </Card>

            <Card className="p-6  ">
              <Badge variant="error" size="sm" className="mb-3">Advanced</Badge>
              <Text variant="h3" className="mb-3 ">Building Custom Components</Text>
              <Text variant="body" className="mb-4 ">
                Create your own components that integrate seamlessly with Nona. Learn about composition 
                patterns, prop APIs, and maintaining consistency.
              </Text>
              <Text variant="small" className="">
                Duration: 60 minutes • Topics: Component architecture, TypeScript
              </Text>
            </Card>

            <Card className="p-6  ">
              <Badge variant="error" size="sm" className="mb-3">Advanced</Badge>
              <Text variant="h3" className="mb-3 ">Accessibility Deep Dive</Text>
              <Text variant="body" className="mb-4 ">
                Master accessibility best practices with Nona. Learn about ARIA, keyboard navigation, 
                screen readers, and ensuring WCAG compliance.
              </Text>
              <Text variant="small" className="">
                Duration: 50 minutes • Topics: ARIA, Keyboard nav, Screen readers
              </Text>
            </Card>
          </div>
        </div>

        {/* API Reference */}
        <div className="mt-20">
          <Badge variant="neutral" className="mb-4">API Reference</Badge>
          <Text variant="h2" className="mb-6 ">
            Component APIs
          </Text>

          <Stack spacing="6">
            <Card className="p-8  ">
              <Text variant="h3" className="mb-4 ">Button Component</Text>
              <Text variant="body" className="mb-6 ">
                Versatile button component with support for multiple variants, sizes, and states.
              </Text>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <Text variant="body" weight="semibold" className=" mb-2">Props</Text>
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <code className="text-sm text-blue-400">variant</code>
                      <Text variant="small" className="">
                        'primary' | 'secondary' | 'ghost' | 'danger'
                      </Text>
                    </div>
                    <div className="flex justify-between items-start">
                      <code className="text-sm text-blue-400">size</code>
                      <Text variant="small" className="">
                        'sm' | 'md' | 'lg'
                      </Text>
                    </div>
                    <div className="flex justify-between items-start">
                      <code className="text-sm text-blue-400">disabled</code>
                      <Text variant="small" className="">
                        boolean
                      </Text>
                    </div>
                    <div className="flex justify-between items-start">
                      <code className="text-sm text-blue-400">onClick</code>
                      <Text variant="small" className="">
                        (e: Event) =&gt; void
                      </Text>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <Text variant="body" weight="semibold" className=" mb-2">Example Usage</Text>
                  <div className="bg-neutral-900 p-4 rounded-lg font-mono text-sm text-neutral-100">
                    <div>&lt;Button</div>
                    <div className="ml-4">variant="primary"</div>
                    <div className="ml-4">size="md"</div>
                    <div className="ml-4">onClick={'{'}handleClick{'}'}</div>
                    <div>&gt;</div>
                    <div className="ml-4">Click me</div>
                    <div>&lt;/Button&gt;</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8  ">
              <Text variant="h3" className="mb-4 ">Card Component</Text>
              <Text variant="body" className="mb-6 ">
                Container component for grouping related content with consistent styling.
              </Text>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <Text variant="body" weight="semibold" className=" mb-2">Props</Text>
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <code className="text-sm text-blue-400">elevated</code>
                      <Text variant="small" className="">
                        boolean - Adds shadow
                      </Text>
                    </div>
                    <div className="flex justify-between items-start">
                      <code className="text-sm text-blue-400">interactive</code>
                      <Text variant="small" className="">
                        boolean - Hover effects
                      </Text>
                    </div>
                    <div className="flex justify-between items-start">
                      <code className="text-sm text-blue-400">className</code>
                      <Text variant="small" className="">
                        string - Additional classes
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8  ">
              <Text variant="h3" className="mb-4 ">Input Component</Text>
              <Text variant="body" className="mb-6 ">
                Form input with label, error states, and helper text support.
              </Text>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <Text variant="body" weight="semibold" className=" mb-2">Props</Text>
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <code className="text-sm text-blue-400">label</code>
                      <Text variant="small" className="">
                        string - Input label
                      </Text>
                    </div>
                    <div className="flex justify-between items-start">
                      <code className="text-sm text-blue-400">error</code>
                      <Text variant="small" className="">
                        string - Error message
                      </Text>
                    </div>
                    <div className="flex justify-between items-start">
                      <code className="text-sm text-blue-400">helperText</code>
                      <Text variant="small" className="">
                        string - Helper text
                      </Text>
                    </div>
                    <div className="flex justify-between items-start">
                      <code className="text-sm text-blue-400">disabled</code>
                      <Text variant="small" className="">
                        string
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Stack>
        </div>

        {/* Community & Support */}
        <div className="mt-20">
          <Badge variant="success" className="mb-4">Community</Badge>
          <Text variant="h2" className="mb-6 ">
            Join the Nona Community
          </Text>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-8  ">
              <div className="w-12 h-12 bg-neutral-800 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </div>
              <Text variant="h3" className="mb-3 ">Discord Community</Text>
              <Text variant="body" className="mb-4 ">
                Join thousands of developers building with Nona. Get help, share your work, and connect 
                with the community.
              </Text>
              <Button variant="secondary" size="sm" onClick={() => alert('Join Discord')}>
                Join Discord
              </Button>
            </Card>

            <Card className="p-8  ">
              <div className="w-12 h-12 bg-neutral-800 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
              </div>
              <Text variant="h3" className="mb-3 ">GitHub Repository</Text>
              <Text variant="body" className="mb-4 ">
                Contribute to Nona, report issues, or browse the source code. All development happens 
                in the open on GitHub.
              </Text>
              <Button variant="secondary" size="sm" onClick={() => alert('View on GitHub')}>
                View on GitHub
              </Button>
            </Card>

            <Card className="p-8  ">
              <div className="w-12 h-12 bg-neutral-800 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <Text variant="h3" className="mb-3 ">Twitter Updates</Text>
              <Text variant="body" className="mb-4 ">
                Follow @nona_design for updates, tips, and showcases of amazing projects built with 
                the design system.
              </Text>
              <Button variant="secondary" size="sm" onClick={() => alert('Follow on Twitter')}>
                Follow on Twitter
              </Button>
            </Card>

            <Card className="p-8  ">
              <div className="w-12 h-12 bg-neutral-800 rounded-lg mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
              </div>
              <Text variant="h3" className="mb-3 ">Support</Text>
              <Text variant="body" className="mb-4 ">
                Need help with implementation or have questions? Our support team is here to help you 
                succeed with Nona.
              </Text>
              <Button variant="secondary" size="sm" onClick={() => alert('Contact Support')}>
                Contact Support
              </Button>
            </Card>
          </div>
        </div>

        {/* Changelog */}
        <div className="mt-20">
          <Badge variant="neutral" className="mb-4">Changelog</Badge>
          <Text variant="h2" className="mb-6 ">
            What's New
          </Text>

          <Card className="p-8  ">
            <Stack spacing="8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="primary">v2.1.0</Badge>
                  <Text variant="small" className="">Released December 2024</Text>
                </div>
                <Text variant="h4" className="mb-3 ">Major Updates</Text>
                <ul className="list-disc list-inside space-y-2 dark:text-neutral-300 ml-4">
                  <li>Added 5 new components: Tooltip, Dropdown, Modal, Toast, Tabs</li>
                  <li>Improved dark mode with pure black backgrounds</li>
                  <li>Enhanced accessibility with better focus indicators</li>
                  <li>Performance improvements reducing bundle size by 20%</li>
                  <li>New design tokens for shadows and animations</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="neutral">v2.0.0</Badge>
                  <Text variant="small" className="">Released October 2024</Text>
                </div>
                <Text variant="h4" className="mb-3 ">Breaking Changes</Text>
                <ul className="list-disc list-inside space-y-2 dark:text-neutral-300 ml-4">
                  <li>Redesigned component API for better consistency</li>
                  <li>Updated color palette with improved contrast ratios</li>
                  <li>New spacing scale based on 8px grid</li>
                  <li>Migrated to CSS variables for easier theming</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="neutral">v1.5.0</Badge>
                  <Text variant="small" className="">Released August 2024</Text>
                </div>
                <Text variant="h4" className="mb-3 ">Features & Fixes</Text>
                <ul className="list-disc list-inside space-y-2 dark:text-neutral-300 ml-4">
                  <li>Added TypeScript definitions for all components</li>
                  <li>Fixed button focus states in Safari</li>
                  <li>Improved mobile responsiveness for all layouts</li>
                  <li>Added new badge size variants</li>
                </ul>
              </div>
            </Stack>
          </Card>
        </div>
      </div>
    </Container>
  );
};
