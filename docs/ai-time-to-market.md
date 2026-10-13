# AI-assisted delivery та Time to Market

Stakeholder statement:

> Поточний Time to Market для major feature становить приблизно 4 місяці. З AI coding tools developers мають працювати приблизно в 4 рази швидше. Тому major-feature Time to Market має скоротитися з 4 місяців до 1 місяця.

Це припущення треба проаналізувати, а не автоматично прийняти чи відхилити.

## Поточна delivery pipeline model

```text
Analysis:        20 days
Implementation:  40 days
Integration:     25 days
Validation:      25 days
Release:         10 days
Total:          120 days
```

Це спрощені середні значення. Частина роботи може виконуватися паралельно, але historical planning використовує суму як наближення end-to-end Time to Market.

## Hypothetical AI acceleration

Stakeholders пропонують таку зміну:

```text
Implementation: 40 days -> 10 days
```

Для Analysis, Integration, Validation і Release автоматичне скорочення не задано. Команда вже помічає, що більші PR довше чекають на review, а зміни в кількох modules потребують більше integration testing.

## Доступні спостереження

- Developers використовують AI для scaffolding, tests, refactoring suggestions і documentation drafts.
- Security та finance-related changes досі потребують human review.
- Test environment один, черга на integration testing іноді становить 3-5 днів.
- Release відбувається у спільному deployment window двічі на тиждень.
- В одному release знаходяться зміни всіх modules.
- Немає baseline для defect rate коду, створеного з AI assistance.
- Architecture knowledge розподілене нерівномірно, тому review часто чекає на двох senior engineers.

## Завдання для рівня 90+

Проаналізуйте stakeholder expectation і дайте відповідь на питання:

1. Які stages AI реально може прискорити в цьому контексті?
2. Які bottlenecks залишаться або перемістяться?
3. Які architecture constraints обмежують throughput?
4. Які process constraints не вирішуються генерацією коду?
5. Чи реалістична ціль 1 місяць за наявних умов?
6. Що саме має змінитися, щоб ціль стала реалістичною?
7. Які нові risks виникають зі зростанням implementation throughput?
8. Як виміряти фактичний вплив AI, не покладаючись лише на LOC або кількість PR?

Можна використати модель:

```text
TTM = Analysis + Implementation + Integration + Validation + Release
```

Висновок може підтримати або заперечити ціль 1 місяць. Оцінюється evidence, assumptions, trade-offs і system-wide reasoning.
