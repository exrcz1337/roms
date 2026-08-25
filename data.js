const translations = {
    en: {
        title: "My Custom Firmwares",
        home: "Home",
        firmwares: "Available Firmwares",
        readMore: "Read More",
        tutorial: "Flashing Tutorial",
        screenshots: "Screenshots",
        download: "Download Firmware",
        back: "Back to Home",
        language: "Language:"
    },
    ru: {
        title: "Мои Кастомные Прошивки",
        home: "Главная",
        firmwares: "Доступные Прошивки",
        readMore: "Подробнее",
        tutorial: "Инструкция по прошивке",
        screenshots: "Скриншоты",
        download: "Скачать Прошивку",
        back: "На главную",
        language: "Язык:"
    }
};

const firmwares = [
    {
        id: "HyperOS 3.1 Global",
        name: "HyperOS 3.1 Global",
        description: {
            en: "HyperOS 3.1 - fast, beautiful, smooth firmware from Xiaomi",
            ru: "HyperOS 3.1 — быстрая, красивая, плавная прошивка от Xiaomi"
        },
        banner: "https://via.placeholder.com/1000x300?text=HyperOS+3.1+Global+Banner",
        screenshots: [
            "https://github.com/exrcz1337/site/blob/main/screenshots/agate/HyperOS3.1GL/about.jpg?raw=true",
            "https://github.com/exrcz1337/site/blob/main/screenshots/agate/HyperOS3.1GL/lockscreen.jpg?raw=true",
            "https://github.com/exrcz1337/site/blob/main/screenshots/agate/HyperOS3.1GL/main.jpg?raw=true",
            "https://github.com/exrcz1337/site/blob/main/screenshots/agate/HyperOS3.1GL/otpechatok.jpg?raw=true",
            "https://github.com/exrcz1337/site/blob/main/screenshots/agate/HyperOS3.1GL/ksu.jpg?raw=true",
            "https://github.com/exrcz1337/site/blob/main/screenshots/agate/HyperOS3.1GL/hz.jpg?raw=true",
            "https://github.com/exrcz1337/site/blob/main/screenshots/agate/HyperOS3.1GL/etc.jpg?raw=true
        ],
        tutorial: {
            en: "1. Unlock Bootloader\n2. Unpack .zip\n3. start flash_all.bat",
            ru: "1. Разблокируйте загрузчик\n2. распакуйте .zip\n3. запустить flash_all.bat"
        },
        downloadLink: "#"
    },
    {
        id: "ColorOS 16.0.1 China WIP",
        name: "ColorOS 16.0.1 China WIP",
        description: {
            en: "ColorOS 16.0.1 is the latest version of OnePlus's custom ROM, based on Android 16.",
            ru: "ColorOS 16.0.1 — последняя версия кастомной прошивки OPPO, основанная на Android 16."
        },
        banner: "https://via.placeholder.com/1000x300?text=ColorOS+16.0.1+China+Banner",
        screenshots: [
            "https://via.placeholder.com/200x400?text=Screen+1",
            "https://via.placeholder.com/200x400?text=Screen+2"
        ],
        tutorial: {
            en: "1. Ensure you are on latest firmware\n2. Flash via fastboot: fastboot update rom.zip\n3. Reboot",
            ru: "1. Убедитесь, что у вас последняя версия официальной прошивки\n2. Прошейте через fastboot: fastboot update rom.zip\n3. Перезагрузитесь"
        },
        downloadLink: "#"
    }
];
