export const translations = {
    en: {
        navbar: {
            title: ['home', 'about', 'skills', 'projects', 'contact'],
        },
        hero: {
            name: 'Ziba Nouri',
            front: 'Frontend Developer',
            hello: 'Hello friends',
            work: 'View My Work',
            touch: 'Get In Touch', // استفاده در Contact
        },
        sidebar: {
            mode: 'Mode',
            theme: 'Theme',
            language: 'Language',
        },
        about: {
            storyTitle: 'My Story',
            story: `I'm rebuilding my life one line of code, one German word, one day at a time.
A single mother of two, I chose action over pain, and coding became my strength.
Despite betrayal and hardship in Iran, I fight to grow, learn, and stand on my own.
This code is my courage. My promise to my children: I will not give up. I will save us.
This is my life. I’m not stopping. I’m coming.`,
            iDoTitle: 'What I Do',
            iDo: ['Front-End Development', 'TypeScript', 'React.js'],
        },
        skills: 'Skills',
        contact: 'Contact', // برای منو و عنوان
        form: {
            name: 'Name',
            email: 'Email',
            message: 'Message',
            send: 'Send Message',
            success: 'Thank You! Your message has been sent successfully!',
        },
    },
    de: {
        navbar: {
            title: [
                'Startseite',
                'Über mich',
                'Fähigkeiten',
                'Projekte',
                'Kontakt',
            ],
        },
        hero: {
            name: 'Ziba Nouri',
            front: 'Frontend-Entwicklerin',
            hello: 'Hallo zusammen',
            work: 'Meine Arbeiten ansehen',
            touch: 'Kontakt aufnehmen',
        },
        sidebar: {
            mode: 'Modus',
            theme: 'Thema',
            language: 'Sprache',
        },
        about: {
            storyTitle: 'Meine Geschichte',
            story: `Ich baue mein Leben neu auf, Zeile für Zeile Code, ein deutsches Wort, einen Tag nach dem anderen.
Als alleinerziehende Mutter von zwei Kindern habe ich mich für Handeln statt Schmerz entschieden, und das Programmieren wurde zu meiner Stärke.
Trotz Verrat und harten Zeiten im Iran kämpfe ich dafür, zu wachsen, zu lernen und auf eigenen Füßen zu stehen.
Dieser Code ist mein Mut. Meine Versprechen an meine Kinder: Ich werde nicht aufgeben. Ich werde uns retten.
Das ist mein Leben. Ich halte nicht an. Ich komme.`,
            iDoTitle: 'Was ich mache',
            iDo: ['Frontend-Entwicklung', 'TypeScript', 'React.js'],
        },
        skills: 'Fähigkeiten',
        contact: 'Kontakt',
        form: {
            name: 'Name',
            email: 'E-Mail',
            message: 'Nachricht',
            send: 'Nachricht senden',
            success: 'Danke! Ihre Nachricht wurde erfolgreich gesendet!',
        },
    },
    ja: {
        navbar: {
            title: ['ホーム', '紹介', 'スキル', 'プロジェクト', '連絡先'],
        },
        hero: {
            name: 'ジーバ・ヌーリ',
            front: 'フロントエンド開発者',
            hello: 'こんにちは',
            work: '作品を見る',
            touch: 'お問い合わせ',
        },
        sidebar: {
            mode: 'モード',
            theme: 'テーマ',
            language: '言語',
        },
        about: {
            storyTitle: '私の物語',
            story: `私は1行のコード、1つのドイツ語の単語、1日ずつ人生を再構築しています。
2人の子を持つシングルマザーとして、痛みよりも行動を選ぶことを決めました。そして、コーディングが私の力になりました。
イランでの裏切りや苦難にもかかわらず、成長し、学び、自立するために戦っています。
このコードは私の勇気です。子どもたちへの約束：あきらめない。移住し、私たちを救う。
これが私の人生です。止まらない。必ずや、私はやってくる。`,
            iDoTitle: '私がすること',
            iDo: ['フロントエンド開発', 'TypeScript', 'React.js'],
        },
        skills: 'スキル',
        contact: '連絡先',
        form: {
            name: '名前',
            email: 'メール',
            message: 'メッセージ',
            send: '送信する',
            success: 'ありがとうございます！メッセージが正常に送信されました！',
        },
    },
} as const;

export type Language = keyof typeof translations;
