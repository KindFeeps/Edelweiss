import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function CTA() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <section className="bg-[#4285F4] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white">
              Is It Time to Sell Your Software Company?
            </h2>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  {...register('name')}
                  className="w-full px-4 py-3 bg-transparent border-b border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-200">{errors.name.message}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  {...register('email')}
                  className="w-full px-4 py-3 bg-transparent border-b border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-200">{errors.email.message}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Company"
                  {...register('company')}
                  className="w-full px-4 py-3 bg-transparent border-b border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  {...register('message')}
                  rows={4}
                  className="w-full px-4 py-3 bg-transparent border-b border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white resize-none"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-200">{errors.message.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 mt-6 text-[#4285F4] bg-white rounded hover:bg-white/90 transition-colors duration-200"
              >
                Submit
              </button>
              <p className="mt-4 text-sm text-white/70 text-center">
                This site is protected by reCAPTCHA and the Google{' '}
                <a href="#" className="underline hover:text-white">
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href="#" className="underline hover:text-white">
                  Terms of Service
                </a>{' '}
                apply.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}