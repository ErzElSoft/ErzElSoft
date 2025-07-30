import React from "react";
import { MapPin, Mail, Phone } from "lucide-react"; // or your icon lib
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from '@/components/ui/card'; // adjust imports as needed
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 bg-orange-500 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full"></div>
                <div className="absolute top-40 right-32 w-24 h-24 bg-orange-300 rounded-full"></div>
                <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-white rounded-full"></div>
                <div className="absolute top-60 right-1/4 w-16 h-16 bg-orange-300 rounded-full"></div>
                <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-white rounded-full"></div>
            </div>

            <div className="relative w-full px-4 lg:px-8 xl:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
                    <p className="text-xl text-orange-100 w-full">
                        Ready to transform your business with innovative IT solutions? Contact us today to discuss your project.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        {/* Company Address Card */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <MapPin className="w-6 h-6 text-orange-500 mr-3" />
                                Our Office
                            </h3>
                            <div className="space-y-2 text-gray-700">
                                <p className="font-semibold">ErzEl Soft</p>
                                <p>3502 Green Turtle Road</p>
                                <p>Regina, Saskatchewan S4V 3N8</p>
                                <p>Canada</p>
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                            <div className="flex items-start space-x-4 mb-6">
                                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-6 h-6 text-orange-500" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                                    <p className="text-orange-100">hello@erzelsoft.com</p>
                                    <p className="text-orange-100">support@erzelsoft.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-6 h-6 text-orange-500" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                                    <p className="text-orange-100">+1 (306) 807-3677</p>
                                    <p className="text-orange-100">Available 24/7</p>
                                    <div className="mt-4 space-y-1 text-orange-100 text-sm">
                                        <p className="font-semibold">Business Hours (Office Support):</p>
                                        <ul className="space-y-0.5 ml-2">
                                            <li>📅 Monday: 8:30 AM – 5:00 PM</li>
                                            <li>📅 Tuesday: 8:30 AM – 5:00 PM</li>
                                            <li>📅 Wednesday: 8:30 AM – 5:00 PM</li>
                                            <li>📅 Thursday: 8:30 AM – 5:00 PM</li>
                                            <li>📅 Friday: 8:30 AM – 5:00 PM</li>
                                            <li>🚫 Saturday: Closed</li>
                                            <li>🚫 Sunday: Closed</li>
                                            <li>📌 Statutory Holidays: Closed</li>
                                        </ul>
                                        <p className="mt-2">
                                            For urgent inquiries outside these hours, feel free to reach out—we’ll respond as soon as possible based on priority.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Map */}
                        <div className="bg-white rounded-2xl p-4 shadow-lg">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Find Us</h3>
                            <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.8234567890123!2d-104.6178!3d50.4452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1e40fba0b2e9%3A0x3e3e3e3e3e3e3e3e!2s3502%20Green%20Turtle%20Rd%2C%20Regina%2C%20SK%20S4V%203N8%2C%20Canada!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="ErzEl Soft Office Location"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <Card className="border-0 bg-white shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-gray-900 text-2xl">Send us a message</CardTitle>
                                <CardDescription>
                                    Fill out the form below and we'll get back to you within 24 hours.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm font-medium text-gray-700 mb-2 block">First Name</label>
                                        <Input
                                            placeholder="John"
                                            className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-700 mb-2 block">Last Name</label>
                                        <Input
                                            placeholder="Doe"
                                            className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700 mb-2 block">Email</label>
                                    <Input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700 mb-2 block">Phone</label>
                                    <Input
                                        type="tel"
                                        placeholder="+1 (555) 123-4567"
                                        className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700 mb-2 block">Subject</label>
                                    <Input
                                        placeholder="Project Inquiry"
                                        className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700 mb-2 block">Message</label>
                                    <Textarea
                                        placeholder="Tell us about your project..."
                                        rows={6}
                                        className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                                    />
                                </div>
                                <Button className="bg-orange-500 hover:bg-orange-600 text-white py-3 text-base font-semibold">
                                    Send Message
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
