<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit();
}

$projects = [
    [
        'num' => '01',
        'name' => 'GamePlat',
        'stack' => ['Laravel', 'React', 'FastAPI', 'Docker'],
        'url' => 'https://github.com/RuthDanielaAguirre',
        'desc' => [
            'es' => 'Plataforma de juegos con reconocimiento facial en tiempo real. Arquitectura de microservicios, CI/CD en Raspberry Pi y experiencia de usuario construida desde cero.',
            'en' => 'Gaming platform with real-time facial recognition. Microservice architecture, CI/CD on Raspberry Pi, and a user experience built from scratch.',
        ],
    ],
    [
        'num' => '02',
        'name' => 'TUDU',
        'stack' => ['Python', 'FastAPI', 'Whisper', 'MySQL'],
        'url' => 'https://github.com/RuthDanielaAguirre/TUDU',
        'desc' => [
            'es' => 'To-do controlado por voz que se adapta al estado emocional del usuario. Whisper, FastAPI y una interfaz que escucha de verdad.',
            'en' => 'Voice-controlled to-do app that adapts to the user’s emotional state. Whisper, FastAPI, and an interface that actually listens.',
        ],
    ],
    [
        'num' => '03',
        'name' => 'FemCoders Club',
        'stack' => ['TypeScript', 'React', 'NestJS', 'Tailwind'],
        'url' => 'https://www.femcodersclub.com/',
        'desc' => [
            'es' => 'Plataforma para impulsar mujeres en tecnología. Comunidad, formación y proyectos colaborativos construidos con TypeScript de principio a fin.',
            'en' => 'Platform built to empower women in tech. Community, learning, and collaborative projects delivered end-to-end with TypeScript.',
        ],
    ],
    [
        'num' => '04',
        'name' => 'Happy Rental Bike',
        'stack' => ['WordPress', 'WooCommerce'],
        'url' => 'https://happyrentalbike.com/',
        'desc' => [
            'es' => 'E-commerce real para alquiler de bicicletas en Barcelona. Reservas, pagos online y gestión de inventario funcionando en producción.',
            'en' => 'Real e-commerce for bike rentals in Barcelona. Reservations, online payments, and live inventory management in production.',
        ],
    ],
];

$socialLinks = [
    [
        'label' => 'GitHub',
        'href' => 'https://github.com/RuthDanielaAguirre',
        'external' => true,
        'aria' => [
            'es' => 'Abrir perfil de GitHub de Ruth Daniela Aguirre',
            'en' => 'Open Ruth Daniela Aguirre GitHub profile',
        ],
    ],
    [
        'label' => 'LinkedIn',
        'href' => 'https://www.linkedin.com/in/ruth-daniela-aguirre/',
        'external' => true,
        'aria' => [
            'es' => 'Abrir perfil de LinkedIn de Ruth Daniela Aguirre',
            'en' => 'Open Ruth Daniela Aguirre LinkedIn profile',
        ],
    ],
    [
        'label' => 'Email',
        'href' => 'mailto:hola@danielaaguirre.dev',
        'external' => false,
        'aria' => [
            'es' => 'Enviar un correo a hola@danielaaguirre.dev',
            'en' => 'Send an email to hola@danielaaguirre.dev',
        ],
    ],
];

function buildProjects(array $projects, string $locale): array
{
    return array_map(static function (array $project) use ($locale): array {
        return [
            'num' => $project['num'],
            'name' => $project['name'],
            'desc' => $project['desc'][$locale],
            'stack' => $project['stack'],
            'url' => $project['url'],
        ];
    }, $projects);
}

function buildFooterLinks(array $links, string $locale): array
{
    return array_map(static function (array $link) use ($locale): array {
        return [
            'label' => $link['label'],
            'href' => $link['href'],
            'external' => $link['external'],
            'aria' => $link['aria'][$locale],
        ];
    }, $links);
}

$payload = [
    'meta' => [
        'name' => 'Ruth Daniela Aguirre',
        'role' => 'Full-stack Developer',
        'version' => '2026.05',
        'generatedAt' => gmdate(DATE_ATOM),
    ],
    'content' => [
        'es' => [
            'nav' => [
                'status' => 'disponible 2026',
            ],
            'hero' => [
                'subtitle' => ['Fullstack developer.', 'Barcelona — disponible 2026.'],
                'meta' => [
                    ['label' => 'GitHub', 'value' => '/RuthDanielaAguirre'],
                    ['label' => 'Stack', 'value' => 'Full'],
                    ['label' => 'Estado', 'value' => 'activa'],
                ],
            ],
            'projects' => [
                'items' => buildProjects($projects, 'es'),
            ],
            'footer' => [
                'links' => buildFooterLinks($socialLinks, 'es'),
            ],
        ],
        'en' => [
            'nav' => [
                'status' => 'available 2026',
            ],
            'hero' => [
                'subtitle' => ['Full-stack developer.', 'Barcelona — available 2026.'],
                'meta' => [
                    ['label' => 'GitHub', 'value' => '/RuthDanielaAguirre'],
                    ['label' => 'Stack', 'value' => 'Full'],
                    ['label' => 'Status', 'value' => 'active'],
                ],
            ],
            'projects' => [
                'items' => buildProjects($projects, 'en'),
            ],
            'footer' => [
                'links' => buildFooterLinks($socialLinks, 'en'),
            ],
        ],
    ],
];

echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
?>