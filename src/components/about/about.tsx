import {
  Target,
  Rocket,
  Code2,
  Trophy,
  Hammer,
  Users,
  Handshake,
  BookOpen,
} from "lucide-react";

export default function About() {
  return (
    <section className="bg-gray-50 py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About TU Codes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A thriving community of passionate developers, innovators, and tech enthusiasts
            committed to fostering a culture of learning and collaboration.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center border border-blue-100">
                <Target className="w-6 h-6 text-[#1a73e8]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              To empower students with cutting-edge technical skills, foster innovation,
              and create a supportive environment where everyone can learn, build, and grow together.
              We believe in hands-on learning and real-world problem solving.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center border border-blue-100">
                <Rocket className="w-6 h-6 text-[#1a73e8]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              To build the most vibrant and inclusive coding community in our university,
              where students from all backgrounds can collaborate on innovative projects,
              participate in hackathons, and prepare for successful careers in technology.
            </p>
          </div>
        </div>

        {/* What We Offer */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What We Offer
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Workshop Card */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all border border-gray-100 hover:border-blue-200">
              <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-blue-50 border border-blue-100">
                <Code2 className="w-7 h-7 text-[#1a73e8]" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Workshops & Bootcamps
              </h4>
              <p className="text-gray-600">
                Regular hands-on workshops covering web development, mobile apps, AI/ML, and more.
              </p>
            </div>

            {/* Hackathons Card */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all border border-gray-100 hover:border-blue-200">
              <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-blue-50 border border-blue-100">
                <Trophy className="w-7 h-7 text-[#1a73e8]" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Hackathons</h4>
              <p className="text-gray-600">
                Exciting coding competitions where you can showcase your skills and win prizes.
              </p>
            </div>

            {/* Projects Card */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all border border-gray-100 hover:border-blue-200">
              <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-blue-50 border border-blue-100">
                <Hammer className="w-7 h-7 text-[#1a73e8]" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Real Projects</h4>
              <p className="text-gray-600">
                Work on real-world projects and build your portfolio while collaborating with peers.
              </p>
            </div>

            {/* Mentorship Card */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all border border-gray-100 hover:border-blue-200">
              <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-blue-50 border border-blue-100">
                <Users className="w-7 h-7 text-[#1a73e8]" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Mentorship</h4>
              <p className="text-gray-600">
                Get guidance from experienced seniors and industry professionals.
              </p>
            </div>

            {/* Networking Card */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all border border-gray-100 hover:border-blue-200">
              <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-blue-50 border border-blue-100">
                <Handshake className="w-7 h-7 text-[#1a73e8]" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Networking</h4>
              <p className="text-gray-600">
                Connect with like-minded developers and expand your professional network.
              </p>
            </div>

            {/* Resources Card */}
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all border border-gray-100 hover:border-blue-200">
              <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-blue-50 border border-blue-100">
                <BookOpen className="w-7 h-7 text-[#1a73e8]" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Learning Resources</h4>
              <p className="text-gray-600">
                Access curated learning materials, tutorials, and exclusive resources.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#1a73e8] to-[#1558b0] rounded-3xl p-12 text-center text-white shadow-xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Our Community?
          </h3>
          <p className="text-xl mb-8 text-blue-100">
            Be part of something amazing. Start your coding journey with us today!
          </p>
          <a
            href="https://chat.whatsapp.com/LaGO5UcwqpbEgJwuntWPc6"
            target="_blank"
            className="inline-flex items-center justify-center rounded-full bg-white text-[#1a73e8] px-8 py-4 font-semibold text-lg transition-all hover:bg-gray-100 hover:shadow-lg hover:scale-[1.02]"
          >
            Join TU Codes Now
          </a>
        </div>
      </div>
    </section>
  );
}
