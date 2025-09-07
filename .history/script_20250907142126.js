// ===================================================================================
//  1. GET HTML ELEMENTS
// ===================================================================================
const startButton = document.getElementById("feeling-btn"); // How are you feeling button //
const feelingsContainer = document.getElementById("feelings-container"); // Container for feeling buttons
const feelingButtons = document.querySelectorAll(".feeling-btn"); // All feeling buttons
const verseDisplay = document.getElementById("verse-display"); // Where the verses will be shown
const randomVerseButton = document.getElementById("random-verse-btn"); // Button to get a random verse
const prayerButton = document.getElementById("prayer-btn"); //Request a prayer button
const dailyPrayerPopup = document.getElementById('daily-prayer-btn'); // Daily Prayer popup
// ===================================================================================
//  2. POPUP LOGIC ADJUSTMENTS
// ===================================================================================
function Popup() {
  document.getElementById("prayer-popup").style.display = "block";
}

function ClosePopup() {
  document.getElementById("prayer-popup").style.display = "none";
}

function SendPrayer() {
  const name = document.getElementById("prayer-name").value;
  const prayer = document.getElementById("prayer-text").value;

  if (prayer.trim()) {
    alert("Your prayer request has been received. May God bless you!");
    ClosePopup();
    document.getElementById("prayer-name").value = "";
    document.getElementById("prayer-text").value = "";
  } else {
    alert("Please enter your prayer request.");
  }
}

// Close popup when clicking outside
document.getElementById("prayer-popup").addEventListener("click", function (e) {
  if (e.target === this) {
    ClosePopup();
  }
});



// ===================================================================================
//  3. BIBLE VERSES DATA
// ===================================================================================

const verses = {
  Angry: [
    "A soft answer turns away wrath, but a harsh word stirs up anger. (Proverbs 15:1)",
    "In your anger do not sin: Do not let the sun go down while you are still angry. (Ephesians 4:26)",
    "A hot-tempered person stirs up conflict, but the one who is patient calms a quarrel. (Proverbs 15:18)",
    "The discretion of a man makes him slow to anger, and his glory is to overlook a transgression. (Proverbs 19:11)",
    "Do not be quickly provoked in your spirit, for anger resides in the lap of fools. (Ecclesiastes 7:9)",
    "My dear brothers and sisters, take note of this: Everyone should be quick to listen, slow to speak and slow to become angry. (James 1:19-20)",
    "A gentle answer turns away wrath, but a harsh word stirs up anger. (Proverbs 15:1)",
    // New verses added below
    "He who is slow to anger is better than the mighty, and he who rules his spirit than he who takes a city. (Proverbs 16:32)",
    "Do not make friends with a hot-tempered person, do not associate with one easily angered. (Proverbs 22:24)",
    "Fools give full vent to their rage, but the wise bring calm in the end. (Proverbs 29:11)",
    "Refrain from anger and turn from wrath; do not fret—it leads only to evil. (Psalm 37:8)",
    "But you, Lord, are a compassionate and gracious God, slow to anger, abounding in love and faithfulness. (Psalm 86:15)",
  ],
  
  Peaceful: [
     "Peace I leave with you; my peace I give you. (John 14:27)",
    "He will keep in perfect peace those whose minds are steadfast, because they trust in him. (Isaiah 26:3)",
    "The Lord gives strength to his people; the Lord blesses his people with peace. (Psalm 29:11)",
    "You will go out in joy and be led forth in peace. (Isaiah 55:12)",
    "Let the peace of Christ rule in your hearts. (Colossians 3:15)",
    "And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus. (Philippians 4:7)",
    "If it is possible, as far as it depends on you, live at peace with everyone. (Romans 12:18)",
    // New verses added below
    "The fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness. (Galatians 5:22)",
    "Turn from evil and do good; seek peace and pursue it. (Psalm 34:14)",
    "Great peace have those who love your law, and nothing can make them stumble. (Psalm 119:165)",
    "May the God of hope fill you with all joy and peace as you trust in him. (Romans 15:13)",
    "Now may the Lord of peace himself give you peace at all times and in every way. (2 Thessalonians 3:16)",
  ],
   Strong: [
    "I can do all this through him who gives me strength. (Philippians 4:13)",
    "Be strong and courageous. Do not be afraid... for the Lord your God goes with you. (Deuteronomy 31:6)",
    "The Lord is my strength and my shield; my heart trusts in him, and he helps me. (Psalm 28:7)",
    "The joy of the Lord is your strength. (Nehemiah 8:10)",
    "The Lord is my light and my salvation—whom shall I fear? (Psalm 27:1)",
    "For when I am weak, then I am strong. (2 Corinthians 12:10)",
    "God is our refuge and strength, an ever-present help in trouble. (Psalm 46:1)",
    // New verses added below
    "The Lord is my strength and my song; he has given me victory. (Exodus 15:2)",
    "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you. (Isaiah 41:10)",
    "But those who hope in the Lord will renew their strength. They will soar on wings like eagles. (Isaiah 40:31)",
    "He gives power to the weak and strength to the powerless. (Isaiah 40:29)",
    "Finally, be strong in the Lord and in his mighty power. (Ephesians 6:10)",
  ],
  Happy: [
    "Rejoice in the Lord always. I will say it again: Rejoice! (Philippians 4:4)",
    "The Lord has done great things for us, and we are filled with joy. (Psalm 126:3)",
    "A cheerful heart is good medicine. (Proverbs 17:22)",
    "For where your treasure is, there your heart will be also. (Matthew 6:21)",
    "The fruit of the Spirit is love, joy, peace... (Galatians 5:22)",
    "This is the day that the Lord has made; let us rejoice and be glad in it. (Psalm 118:24)",
    "So with you: Now is your time of grief, but I will see you again and you will rejoice, and no one will take away your joy. (John 16:22)",
    // New verses added below
    "You make known to me the path of life; in your presence there is fullness of joy. (Psalm 16:11)",
    "The hope of the righteous brings joy, but the expectation of the wicked will perish. (Proverbs 10:28)",
    "Until now you have not asked for anything in my name. Ask and you will receive, so that your joy may be complete. (John 16:24)",
    "Though you have not seen him, you love him; and even though you do not see him now, you believe in him and are filled with an inexpressible and glorious joy. (1 Peter 1:8)",
    "When anxiety was great within me, your consolation brought me joy. (Psalm 94:19)",
  ],
  Discouraged: [
    "So do not fear, for I am with you; do not be dismayed, for I am your God. (Isaiah 41:10)",
    "When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. (Isaiah 43:2)",
    "Cast all your anxiety on him because he cares for you. (1 Peter 5:7)",
    "The Lord is close to the brokenhearted and saves those who are crushed in spirit. (Psalm 34:18)",
    "I can do all this through him who gives me strength. (Philippians 4:13)",
    "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up. (Galatians 6:9)",
    "The righteous cry out, and the Lord hears them; he delivers them from all their troubles. (Psalm 34:17)",
    // New verses added below
    "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go. (Joshua 1:9)",
    "Why, my soul, are you downcast? Why so disturbed within me? Put your hope in God, for I will yet praise him, my Savior and my God. (Psalm 42:11)",
    "The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning. (Lamentations 3:22-23)",
    "Come to me, all you who are weary and burdened, and I will give you rest. (Matthew 11:28)",
    "For our light and momentary troubles are achieving for us an eternal glory that far outweighs them all. (2 Corinthians 4:17)",
  ],
  Forgiving: [
    "For if you forgive other people when they sin against you, your heavenly Father will also forgive you. (Matthew 6:14)",
    "And forgive us our debts, as we also have forgiven our debtors. (Matthew 6:12)",
    "Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you. (Ephesians 4:32)",
    "Forgive as the Lord forgave you. (Colossians 3:13)",
    "But if you do not forgive others their sins, your Father will not forgive your sins. (Matthew 6:15)",
    // New verses added below
    "Then Peter came to Jesus and asked, 'Lord, how many times shall I forgive my brother or sister who sins against me? Up to seven times?' Jesus answered, 'I tell you, not seven times, but seventy-seven times.' (Matthew 18:21-22)",
    "Do not judge, and you will not be judged. Do not condemn, and you will not be condemned. Forgive, and you will be forgiven. (Luke 6:37)",
    "He has not dealt with us according to our sins, nor punished us according to our iniquities. (Psalm 103:10)",
    "‘It is mine to avenge; I will repay,’ says the Lord. (Romans 12:19)",
    "Whoever would foster love covers over an offense, but whoever repeats the matter separates close friends. (Proverbs 17:9)",
  ],
  Confused: [
    "For God is not the author of confusion, but of peace. (1 Corinthians 14:33)",
    "Trust in the Lord with all your heart and lean not on your own understanding. (Proverbs 3:5)",
    "The Lord will fight for you; you need only to be still. (Exodus 14:14)",
    "If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault. (James 1:5)",
    "He guides the humble in what is right and teaches them his way. (Psalm 25:9)",
    // New verses added below
    "In all your ways acknowledge him, and he will make your paths straight. (Proverbs 3:6)",
    "Your word is a lamp for my feet, a light on my path. (Psalm 119:105)",
    "Whether you turn to the right or to the left, your ears will hear a voice behind you, saying, 'This is the way; walk in it.' (Isaiah 30:21)",
    "For my thoughts are not your thoughts, neither are your ways my ways, declares the Lord. (Isaiah 55:8)",
    "I will instruct you and teach you in the way you should go; I will counsel you with my loving eye on you. (Psalm 32:8)",
  ],
  Content: [
    "I have learned to be content whatever the circumstances. (Philippians 4:11)",
    "Keep your lives free from the love of money and be content with what you have. (Hebrews 13:5)",
    "But godliness with contentment is great gain. (1 Timothy 6:6)",
    "The Lord is my shepherd, I lack nothing. (Psalm 23:1)",
    "A heart at peace gives life to the body, but envy rots the bones. (Proverbs 14:30)",
    // New verses added below
    "For we brought nothing into the world, and we can take nothing out of it. (1 Timothy 6:7)",
    "Better a little with the fear of the Lord than great wealth with turmoil. (Proverbs 15:16)",
    "Give me neither poverty nor riches, but give me only my daily bread. (Proverbs 30:8)",
    "I know what it is to be in need, and I know what it is to have plenty. I have learned the secret of being content in any and every situation. (Philippians 4:12)",
    "A person can do nothing better than to eat and drink and find satisfaction in their own toil. This too, I see, is from the hand of God. (Ecclesiastes 2:24)",
  ],
  Proud: [
    "When pride comes, then comes disgrace, but with humility comes wisdom. (Proverbs 11:2)",
    "God opposes the proud but shows favor to the humble. (James 4:6)",
    "Pride goes before destruction, a haughty spirit before a fall. (Proverbs 16:18)",
    "Humble yourselves before the Lord, and he will lift you up. (James 4:10)",
    "Let another praise you, and not your own mouth; a stranger, and not your own lips. (Proverbs 27:2)",
    // New verses added below
    "To fear the Lord is to hate evil; I hate pride and arrogance, evil behavior and perverse speech. (Proverbs 8:13)",
    "The Lord detests all the proud of heart. Be sure of this: They will not go unpunished. (Proverbs 16:5)",
    "Before a downfall the heart is haughty, but humility comes before honor. (Proverbs 18:12)",
    "Live in harmony with one another. Do not be proud, but be willing to associate with people of low position. Do not be conceited. (Romans 12:16)",
    "For all those who exalt themselves will be humbled, and those who humble themselves will be exalted. (Luke 14:11)",
  ],
  Tired: [
    "Come to me, all you who are weary and burdened, and I will give you rest. (Matthew 11:28)",
    "He gives strength to the weary and increases the power of the weak. (Isaiah 40:29)",
    "My flesh and my heart may fail, but God is the strength of my heart and my portion forever. (Psalm 73:26)",
    "The Lord is my strength and my shield; my heart trusts in him, and he helps me. (Psalm 28:7)",
    "In peace I will lie down and sleep, for you alone, Lord, make me dwell in safety. (Psalm 4:8)",
    // New verses added below
    "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint. (Isaiah 40:31)",
    "Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls. (Matthew 11:29)",
    "The eternal God is your refuge, and underneath are the everlasting arms. (Deuteronomy 33:27)",
    "Therefore, my dear brothers and sisters, stand firm. Let nothing move you. Always give yourselves fully to the work of the Lord, because you know that your labor in the Lord is not in vain. (1 Corinthians 15:58)",
    "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up. (Galatians 6:9)",
  ],
  Jealous: [
    "For you shall worship no other god, for the Lord, whose name is Jealous, is a jealous God. (Exodus 34:14)",
    "A heart at peace gives life to the body, but envy rots the bones. (Proverbs 14:30)",
    "Do not let your hearts be troubled. You believe in God; believe also in me. (John 14:1)",
    "Resentment kills a fool, and envy slays the simple. (Job 5:2)",
    "Love is patient, love is kind. It does not envy. (1 Corinthians 13:4)",
    // New verses added below
    "For where you have envy and selfish ambition, there you find disorder and every evil practice. (James 3:16)",
    "Anger is cruel and fury overwhelming, but who can stand before jealousy? (Proverbs 27:4)",
    "Therefore, rid yourselves of all malice and all deceit, hypocrisy, envy, and slander of every kind. (1 Peter 2:1)",
    "Let us not become conceited, provoking and envying each other. (Galatians 5:26)",
    "You desire but do not have, so you kill. You covet but you cannot get what you want, so you quarrel and fight. (James 4:2)",
  ],
  Loved: [
    "We love because he first loved us. (1 John 4:19)",
    "The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you. (Zephaniah 3:17)",
    "I have loved you with an everlasting love; I have drawn you with unfailing kindness. (Jeremiah 31:3)",
    "As a father has compassion on his children, so the Lord has compassion on those who fear him. (Psalm 103:13)",
    "Nothing will be able to separate us from the love of God that is in Christ Jesus our Lord. (Romans 8:38-39)",
    // New verses added below
    "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us. (Romans 5:8)",
    "See what great love the Father has lavished on us, that we should be called children of God! (1 John 3:1)",
    "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. (John 3:16)",
    "Greater love has no one than this: to lay down one’s life for one’s friends. (John 15:13)",
    "And so we know and rely on the love God has for us. God is love. (1 John 4:16)",
  ],
  Weak: [
    "He gives strength to the weary and increases the power of the weak. (Isaiah 40:29)",
    "My flesh and my heart may fail, but God is the strength of my heart and my portion forever. (Psalm 73:26)",
    "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' (2 Corinthians 12:9)",
    "The Lord is my strength and my shield; my heart trusts in him, and he helps me. (Psalm 28:7)",
    "I can do all this through him who gives me strength. (Philippians 4:13)",
    // New verses added below
    "The Lord upholds all who fall and lifts up all who are bowed down. (Psalm 145:14)",
    "That is why, for Christ’s sake, I delight in weaknesses... For when I am weak, then I am strong. (2 Corinthians 12:10)",
    "For the foolishness of God is wiser than human wisdom, and the weakness of God is stronger than human strength. (1 Corinthians 1:25)",
    "He heals the brokenhearted and binds up their wounds. (Psalm 147:3)",
    "For we do not have a high priest who is unable to empathize with our weaknesses. (Hebrews 4:15)",
  ],
  Guilty: [
    "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness. (1 John 1:9)",
    "Therefore, there is now no condemnation for those who are in Christ Jesus. (Romans 8:1)",
    "Create in me a pure heart, O God, and renew a steadfast spirit within me. (Psalm 51:10)",
    "As far as the east is from the west, so far has he removed our transgressions from us. (Psalm 103:12)",
    "For all have sinned and fall short of the glory of God. (Romans 3:23)",
    // New verses added below
    "Blessed is the one whose transgressions are forgiven, whose sins are covered. (Psalm 32:1)",
    "Repent, then, and turn to God, so that your sins may be wiped out. (Acts 3:19)",
    "The blood of Jesus, his Son, purifies us from all sin. (1 John 1:7)",
    "For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord. (Romans 6:23)",
    "Who is a God like you, who pardons sin and forgives the transgression of the remnant of his inheritance? (Micah 7:18)",
  ],
  Hopeful: [
    "May the God of hope fill you with all joy and peace as you trust in him. (Romans 15:13)",
    "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future. (Jeremiah 29:11)",
    "Be strong and take heart, all you who hope in the Lord. (Psalm 31:24)",
    "The Lord is good to those whose hope is in him, to the one who seeks him. (Lamentations 3:25)",
    "But those who hope in the Lord will renew their strength. (Isaiah 40:31)",
    // New verses added below
    "And we know that in all things God works for the good of those who love him. (Romans 8:28)",
    "Now faith is confidence in what we hope for and assurance about what we do not see. (Hebrews 11:1)",
    "Why, my soul, are you downcast? ... Put your hope in God, for I will yet praise him. (Psalm 42:5)",
    "Let us hold unswervingly to the hope we profess, for he who promised is faithful. (Hebrews 10:23)",
    "But as for me, I will always have hope; I will praise you more and more. (Psalm 71:14)",
  ],
  Anxious: [
    "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. (Philippians 4:6)",
    "Cast all your anxiety on him because he cares for you. (1 Peter 5:7)",
    "When anxiety was great within me, your consolation brought me joy. (Psalm 94:19)",
    "The Lord is my helper; I will not be afraid. What can mere mortals do to me? (Hebrews 13:6)",
    "Peace I leave with you; my peace I give you. (John 14:27)",
    // New verses added below
    "Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own. (Matthew 6:34)",
    "Anxiety weighs down the heart, but a kind word cheers it up. (Proverbs 12:25)",
    "Trust in the Lord with all your heart and lean not on your own understanding. (Proverbs 3:5)",
    "The Lord is my shepherd, I lack nothing. (Psalm 23:1)",
    "So do not fear, for I am with you; do not be dismayed, for I am your God. (Isaiah 41:10)",
  ],
  Sad: [
    "He heals the brokenhearted and binds up their wounds. (Psalm 147:3)",
    "The Lord is close to the brokenhearted and saves those who are crushed in spirit. (Psalm 34:18)",
    "The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures... he refreshes my soul. (Psalm 23:1-3)",
    "Weeping may stay for the night, but rejoicing comes in the morning. (Psalm 30:5)",
    "Come to me, all you who are weary and burdened, and I will give you rest. (Matthew 11:28)",
    // New verses added below
    "Blessed are those who mourn, for they will be comforted. (Matthew 5:4)",
    "You, Lord, keep my lamp burning; my God turns my darkness into light. (Psalm 18:28)",
    "I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world. (John 16:33)",
    "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain. (Revelation 21:4)",
    "My soul is weary with sorrow; strengthen me according to your word. (Psalm 119:28)",
  ],
  Afraid: [
    "For God has not given us a spirit of fear, but of power and of love and of a sound mind. (2 Timothy 1:7)",
    "When I am afraid, I will trust in you. (Psalm 56:3)",
    "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged... (Joshua 1:9)",
    "The Lord is with me; I will not be afraid. What can mere mortals do to me? (Psalm 118:6)",
    "The Lord is my light and my salvation—whom shall I fear? (Psalm 27:1)",
    // New verses added below
    "There is no fear in love. But perfect love drives out fear. (1 John 4:18)",
    "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you. (Isaiah 41:10)",
    "Even though I walk through the darkest valley, I will fear no evil, for you are with me. (Psalm 23:4)",
    "The Lord will fight for you; you need only to be still. (Exodus 14:14)",
    "Peace I leave with you; my peace I give you. Do not let your hearts be troubled and do not be afraid. (John 14:27)",
  ],
  Lonely: [
    "Be strong and courageous. Do not be afraid... for the Lord your God goes with you; he will never leave you nor forsake you. (Deuteronomy 31:6)",
    "The Lord is a refuge for the oppressed, a stronghold in times of trouble. (Psalm 9:9)",
    "Turn to me and be gracious to me, for I am lonely and afflicted. (Psalm 25:16)",
    "I will not leave you as orphans; I will come to you. (John 14:18)",
    "And surely I am with you always, to the very end of the age. (Matthew 28:20)",
    // New verses added below
    "A father to the fatherless, a defender of widows, is God in his holy dwelling. God sets the lonely in families. (Psalm 68:5-6)",
    "Though my father and mother forsake me, the Lord will receive me. (Psalm 27:10)",
    "For where two or three gather in my name, there am I with them. (Matthew 18:20)",
    "The Lord is close to the brokenhearted and saves those who are crushed in spirit. (Psalm 34:18)",
    "Cast all your anxiety on him because he cares for you. (1 Peter 5:7)",
  ],
  Grateful: [
    "Give thanks in all circumstances; for this is God’s will for you in Christ Jesus. (1 Thessalonians 5:18)",
    "Give thanks to the Lord, for he is good; his love endures forever. (Psalm 107:1)",
    "Enter his gates with thanksgiving and his courts with praise; give thanks to him and praise his name. (Psalm 100:4)",
    "And whatever you do, whether in word or deed, do it all in the name of the Lord Jesus, giving thanks to God the Father through him. (Colossians 3:17)",
    "Every good and perfect gift is from above, coming down from the Father of the heavenly lights. (James 1:17)",
    // New verses added below
    "Praise the Lord, my soul, and forget not all his benefits. (Psalm 103:2)",
    "I will give thanks to you, Lord, with all my heart; I will tell of all your wonderful deeds. (Psalm 9:1)",
    "The Lord has done great things for us, and we are filled with joy. (Psalm 126:3)",
    "Thanks be to God for his indescribable gift! (2 Corinthians 9:15)",
    "Let the peace of Christ rule in your hearts... And be thankful. (Colossians 3:15)",
  ],
};

// ========================================= 
//4. DAILY PRAYER FUNCTIONALITY - 
// ========================================= 

// Array of daily prayers
const dailyPrayers = [
    " Dear Lord, Your Word says that when we wait on You, You will renew our strength. Although my strength is low, I am choosing to rest and spend time in Your presence. I refuse to run myself ragged, listening to the voice of the enemy that I should just try harder or work longer. I trust in Your infinite capacity of strength in my weakness. Thank You for working in my weakness and pouring Your strength into me. In Jesus’ name, amen",
    " Dear God Almighty, today I faced things that felt like too much for me. And tomorrow I’m going to face more of the same things and probably new challenges as well. I need Your strength. I need You to hold me up and stand next to me in life’s storms. Perhaps I never really understood how literal Your promises are to give us strength for the day. Maybe tomorrow could be my opportunity to learn what that means on a deeper level. But right now, I am praying for supernatural healing to permeate every cell of my being so that I can find renewed strength beyond my natural ability. I know that this strength comes from You. In Jesus’ name, amen",
    " Dear God, please help me. When I’m overwhelmed and tired, show me how to run to You. Give me the strength I need to endure whatever comes my way, relying on God's power. Take the weight of my concerns off of me, and help me to remember that You are always near. You will always protect and support me. In Jesus’ name, Amen",
    " God, thank You for providing me with strength in every situation. Despite my efforts, I can do nothing on my own. Sometimes I let stress get the best of me and forget that You are in control. Fill me with Your strength and guide me one day at a time through this season, Christ Jesus. In Jesus’ name, Amen..",
    "God, You call me to faithful and obedient living. Thank You for providing Your Word as a guide that helps me bring You glory. When I struggle to live as You call me to, please remind me of the eternity I get to spend with You. And as You do that, restore my strength and endurance. In Jesus’ name, Amen.",
    " Dear Lord, I seek Your guidance and wisdom as I navigate the challenges of life. Help me to discern Your will and to follow Your path. Fill me with the Holy Spirit, that I may be empowered to live a life that is pleasing to You. Give me the courage to trust in Your goodness and to surrender to Your will. In Jesus’ name, I pray. Amen.",
    "Lord Jesus Christ, I pray that You would give me the boldness and confidence to share Your love and message with others. Help me to be a witness to Your goodness and to proclaim Your gospel to a world in need. Fill me with Your Holy Spirit, that I may be empowered to speak Your words and to demonstrate Your love. Give me the heart of an evangelist, that I may be a messenger of Your hope and salvation. In Your name, I pray. Amen.",
    " God, I feel weary and worn out, but I know You are my strength. Please renew my spirit and help me stand firm in faith, even when I feel weak. Fill me with Your peace, courage, and endurance to face whatever comes. I trust that You are with me and will carry me through. May this day bring healing to any pain you carry, and may you find strength in knowing that better days are ahead.In Jesus’ name, amen.",
    " God, I feel worn out and unsure how to keep going. Please give me the strength I need to face today with courage and hope. Remind me that I don’t have to do this alone, that You are with me, holding me up. In Jesus’ name, amen.",
    "Let gratitude be your attitude today. May you notice and appreciate the many gifts that surround you each moment."
];

// Function to get prayer based on current date
function getDailyPrayer() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    return dailyPrayers[dayOfYear % dailyPrayers.length];
}

// Function to open Daily Prayer popup
function DailyPrayerPopup() {
    console.log("Daily Prayer popup aberto");
    
    const popup = document.getElementById("daily-prayer-popup");
    const prayerTextDisplay = document.getElementById("prayer-text-display");
    
    if (popup && prayerTextDisplay) {
        // Get today's prayer
        const todaysPrayer = getDailyPrayer();
        console.log("Oração do dia:", todaysPrayer);
        
        prayerTextDisplay.textContent = todaysPrayer;
        popup.style.display = "block";
    } else {
        console.log(":", {
            popup: !!popup,
            prayerTextDisplay: !!prayerTextDisplay
        });
    }
}

// Function to close Daily Prayer popup
function CloseDailyPrayerPopup() {
    console.log("Closing popup");
    const popup = document.getElementById("daily-prayer-popup");
    if (popup) {
        popup.style.display = "none";
    }
}

// Function to mark prayer as read
function MarkPrayerRead() {
    console.log("Marcando como lida");
    const today = new Date().toDateString();
    localStorage.setItem('lastPrayerReadDate', today);
    alert("Prayer marked as read! Come back tomorrow for a new prayer.");
}

// ==================================================================================
//  4. CLICK LOGIC (MODIFIED WITH IF / ELSE IF)
// ===================================================================================

// --- What happens when the MAIN BUTTON is clicked ---
startButton.addEventListener("click", () => {
  verseDisplay.style.display = "none";
  const isVisible = feelingsContainer.style.display === "flex"; 
  feelingsContainer.style.display = isVisible ? "none" : "flex"; // This is a ternary operator!
});

// --- What happens when one of the FEELING BUTTONS is clicked ---
feelingButtons.forEach(button => {
    button.addEventListener("click", () => {
        const feeling = button.innerText.split(" ")[0]; // Gets the feeling name, e.g., "Angry"
        let verseArray = []; // Start with an empty array

        // This is the IF / ELSE IF structure to select the correct verse list
        if (feeling === 'Angry') {
            verseArray = verses.Angry;
        } else if (feeling === 'Peaceful') {
            verseArray = verses.Peaceful;
        } else if (feeling === 'Strong') {
            verseArray = verses.Strong;
        } else if (feeling === 'Happy') {
            verseArray = verses.Happy;
        } else if (feeling === 'Sad') {
            verseArray = verses.Sad;
        } else if (feeling === 'Afraid') {
            verseArray = verses.Afraid;
        } else if (feeling === 'Lonely') {
            verseArray = verses.Lonely;
        } else if (feeling === 'Grateful') {
            verseArray = verses.Grateful;
        } else if (feeling === 'Anxious') {
            verseArray = verses.Anxious;
        } else if (feeling === 'Hopeful') { // The HTML ID is hope-btn, but the text is Hopeful
            verseArray = verses.Hopeful;
        } else if (feeling === 'Guilty') {
            verseArray = verses.Guilty;
        } else if (feeling === 'Weak') {
            verseArray = verses.Weak;
        } else if (feeling === 'Loved') {
            verseArray = verses.Loved;
        } else if (feeling === 'Jealous') {
            verseArray = verses.Jealous;
        } else if (feeling === 'Tired') {
            verseArray = verses.Tired;
        } else if (feeling === 'Proud') {
            verseArray = verses.Proud;
        } else if (feeling === 'Content') {
            verseArray = verses.Content;
        } else if (feeling === 'Confused') {
            verseArray = verses.Confused;
        } else if (feeling === 'Forgiving') {
            verseArray = verses.Forgiving;
        } else if (feeling === 'Discouraged') {
            verseArray = verses.Discouraged;
        }
        
        // This part below remains the same
        verseDisplay.style.display = "block";
        feelingsContainer.style.display = "none";

        if (verseArray && verseArray.length > 0) {
            const randomIndex = Math.floor(Math.random() * verseArray.length);
            const randomVerse = verseArray[randomIndex];
            verseDisplay.innerHTML = `<p>${randomVerse}</p>`;
        } else {
            verseDisplay.innerHTML = "<p>Verses for this feeling are coming soon.</p>";
        }
    });
});


// --- What happens when the RANDOM VERSE button is clicked ---
randomVerseButton.addEventListener("click", (e) => {
  e.preventDefault(); // Prevents the link from jumping to the top of the page
  feelingsContainer.style.display = "none";
  const allVerses = Object.values(verses).flat();
  const randomIndex = Math.floor(Math.random() * allVerses.length);
  const randomVerse = allVerses[randomIndex];
  verseDisplay.style.display = "block";
  verseDisplay.innerHTML = `<p>${randomVerse}</p>`;

});
