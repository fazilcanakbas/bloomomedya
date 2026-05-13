-- 1. Create Form Submissions Table
CREATE TABLE IF NOT EXISTS public.form_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    type TEXT NOT NULL, -- 'contact' veya 'sizi_arayalim'
    name TEXT NOT NULL,
    email TEXT,
    phone TEXT NOT NULL,
    company TEXT, -- Sizi Arayalım formu için (Firma/Şirket Adı)
    subject TEXT, -- İletişim formu için (Konu)
    info_area TEXT, -- Sizi Arayalım formu için (Bilgi Almak İstediğiniz Alan)
    message TEXT,
    note TEXT, -- Sizi Arayalım formu için (Not)
    status TEXT DEFAULT 'new', -- 'new', 'read', 'contacted'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Row Level Security (RLS)
ALTER TABLE public.form_submissions ENABLE ROW LEVEL SECURITY;

-- Politikalar (Policies)
-- A. Herkes (anonim ziyaretçiler) form gönderebilir (Insert yetkisi)
CREATE POLICY "Allow public inserts" ON public.form_submissions
    FOR INSERT 
    TO public
    WITH CHECK (true);

-- B. Sadece giriş yapmış kullanıcılar (admin) okuyabilir (Select yetkisi)
CREATE POLICY "Allow authenticated reads" ON public.form_submissions
    FOR SELECT
    TO authenticated
    USING (true);

-- C. Sadece giriş yapmış kullanıcılar güncelleyebilir ve silebilir (Update, Delete)
CREATE POLICY "Allow authenticated updates" ON public.form_submissions
    FOR UPDATE
    TO authenticated
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Allow authenticated deletes" ON public.form_submissions
    FOR DELETE
    TO authenticated
    USING (true);

-- 3. Create Admin User using Auth Schema
DO $$
DECLARE
  new_user_id UUID := gen_random_uuid();
BEGIN
  -- Check if user already exists
  IF NOT EXISTS (SELECT 1 FROM auth.users WHERE email = 'info@bloomomedya.com') THEN
    -- Insert into auth.users
    INSERT INTO auth.users (
      instance_id,
      id,
      aud,
      role,
      email,
      encrypted_password,
      email_confirmed_at,
      raw_app_meta_data,
      raw_user_meta_data,
      created_at,
      updated_at,
      confirmation_token,
      email_change,
      email_change_token_new,
      recovery_token
    ) VALUES (
      '00000000-0000-0000-0000-000000000000',
      new_user_id,
      'authenticated',
      'authenticated',
      'info@bloomomedya.com',
      crypt('bloomo20264+-*', gen_salt('bf')),
      current_timestamp,
      '{"provider": "email", "providers": ["email"]}',
      '{}',
      current_timestamp,
      current_timestamp,
      '',
      '',
      '',
      ''
    );

    -- Insert into auth.identities
    INSERT INTO auth.identities (
      id,
      user_id,
      identity_data,
      provider,
      provider_id,
      last_sign_in_at,
      created_at,
      updated_at
    ) VALUES (
      new_user_id,
      new_user_id,
      format('{"sub": "%s", "email": "%s"}', new_user_id, 'info@bloomomedya.com')::jsonb,
      'email',
      new_user_id::text,
      current_timestamp,
      current_timestamp,
      current_timestamp
    );
  END IF;
END $$;
