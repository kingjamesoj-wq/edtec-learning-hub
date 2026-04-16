import React, { useState } from "react";
import { motion } from "framer-motion";
import { services, Service } from "@/data/services";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import EnrollmentDialog from "./EnrollmentDialog";

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleEnrollClick = (service: Service) => {
    setSelectedService(service);
    setIsDialogOpen(true);
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            Empowering Your <span className="text-blue-600">Educational Journey</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            We provide a comprehensive range of academic services designed to help you succeed in your local exams and global educational pursuits.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:shadow-xl transition-shadow duration-300 border-slate-100 group">
                <CardHeader className="p-0">
                  <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-blue-700 font-semibold backdrop-blur-sm">
                        {service.category.toUpperCase()}
                      </Badge>
                    </div>
                  </div>
                  <div className="px-6 pt-6 flex items-center gap-3">
                    <div className="p-2.5 bg-blue-50 rounded-xl">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 px-6 pt-4">
                  <p className="text-slate-600 mb-6 line-clamp-2">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-2">
                  <Button 
                    onClick={() => handleEnrollClick(service)}
                    className="w-full h-12 bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white border-none rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Enroll Now
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedService && (
        <EnrollmentDialog 
          service={selectedService} 
          isOpen={isDialogOpen} 
          onOpenChange={setIsDialogOpen} 
        />
      )}
    </section>
  );
};

export default Services;