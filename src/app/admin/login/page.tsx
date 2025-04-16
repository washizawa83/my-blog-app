'use client'

import { PageLayout } from '@/app/components/layouts/PageLayout'
import { authenticate } from '@/app/service/auth/action'
import { useActionState } from 'react'

export default function LoginPage() {
  const [state, formAction] = useActionState(authenticate, true)

  return (
    <PageLayout>
      <div className="md:w-[500px] mx-auto">
        <form action={formAction}>
          <div className="mb-8">
            <div className="flex flex-col mb-4">
              <label htmlFor="username">user name</label>
              <input type="text" id="username" name="username" />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="password">password</label>
              <input type="password" id="password" name="password" />
            </div>
            {!state && (
              <div>
                <span className="text-red-400">Incorrect name or password</span>
              </div>
            )}
          </div>
          <button className="w-full">Login</button>
        </form>
      </div>
    </PageLayout>
  )
}
