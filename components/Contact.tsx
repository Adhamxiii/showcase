"use client";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 text-white max-w-[1200px] mx-auto px-4 overflow-x-clip"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid lg:grid-cols-2 gap-16"
      >
        <div className="space-y-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-7xl font-bold text-gray-300"
          >
            Get in <span className="text-purple-500">touch</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass p-8 rounded-2xl space-y-8"
          >
            <div className="space-y-2">
              <p className="text-lg text-gray-300">Phone</p>
              <a
                href="tel:+9999999999"
                className="text-2xl font-semibold hover:text-purple-400 transition duration-300 flex items-center gap-2"
              >
                +99 (99) 999 999
                <span className="text-gray-500">↗</span>
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-lg text-gray-300">Email</p>
              <a
                href="mailto:info@example.com"
                className="text-2xl font-semibold hover:text-purple-400 transition duration-300 flex items-center gap-2"
              >
                info@example.com
                <span className="text-gray-500">↗</span>
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-lg text-gray-300">Office</p>
              <address className="text-xl not-italic leading-relaxed">
                123 El-Hagar City <br />
                Alexandria <br />
                Egypt
              </address>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full h-full rounded-2xl min-h-[400px] overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109180.12447490798!2d30.037287109908515!3d31.224084583089823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c49126710fd3%3A0xb4e0cda629ee6bb9!2z2KfZhNil2LPZg9mG2K_YsdmK2KnYjCDZhdit2KfZgdi42Kkg2KfZhNil2LPZg9mG2K_YsdmK2Kk!5e0!3m2!1sar!2seg!4v1731198456222!5m2!1sar!2seg"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            title="Map of El-Hadar City"
          ></iframe>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default Contact;
