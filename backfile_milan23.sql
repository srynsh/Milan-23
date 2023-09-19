PGDMP     #                    {            milan    15.4    15.3 M    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16389    milan    DATABASE     p   CREATE DATABASE milan WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.UTF8';
    DROP DATABASE milan;
                milan    false            �           0    0    milan    DATABASE PROPERTIES     .   ALTER DATABASE milan SET "TimeZone" TO 'utc';
                     milan    false                        2615    2200    public    SCHEMA     2   -- *not* creating schema, since initdb creates it
 2   -- *not* dropping schema, since initdb creates it
                milan    false            �            1259    16597    admin    TABLE     c   CREATE TABLE public.admin (
    user_id integer NOT NULL,
    email text,
    display_name text
);
    DROP TABLE public.admin;
       public         heap    milan    false    5            �            1259    16397    users    TABLE     v  CREATE TABLE public.users (
    user_id integer NOT NULL,
    google_id character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    display_name character varying(100),
    avatar_url character varying(255),
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now(),
    supported_teams text[]
);
    DROP TABLE public.users;
       public         heap    milan    false    5            �            1259    16404    aryabhatta_supporters    MATERIALIZED VIEW     �   CREATE MATERIALIZED VIEW public.aryabhatta_supporters AS
 SELECT users.email
   FROM public.users
  WHERE ('ARYABHATTA'::text = ANY (users.supported_teams))
  WITH NO DATA;
 5   DROP MATERIALIZED VIEW public.aryabhatta_supporters;
       public         heap    milan    false    214    214    5            �            1259    16408    bhabha_supporters    MATERIALIZED VIEW     �   CREATE MATERIALIZED VIEW public.bhabha_supporters AS
 SELECT users.email
   FROM public.users
  WHERE ('Bhabha'::text = ANY (users.supported_teams))
  WITH NO DATA;
 1   DROP MATERIALIZED VIEW public.bhabha_supporters;
       public         heap    milan    false    214    214    5            �            1259    16412    bhaskara_supporters    MATERIALIZED VIEW     �   CREATE MATERIALIZED VIEW public.bhaskara_supporters AS
 SELECT users.email
   FROM public.users
  WHERE ('BHASKARA'::text = ANY (users.supported_teams))
  WITH NO DATA;
 3   DROP MATERIALIZED VIEW public.bhaskara_supporters;
       public         heap    milan    false    214    214    5            �            1259    16416    brahmagupta_supporters    MATERIALIZED VIEW     �   CREATE MATERIALIZED VIEW public.brahmagupta_supporters AS
 SELECT users.email
   FROM public.users
  WHERE ('BRAHMAGUPTA'::text = ANY (users.supported_teams))
  WITH NO DATA;
 6   DROP MATERIALIZED VIEW public.brahmagupta_supporters;
       public         heap    milan    false    214    214    5            �            1259    16420    charaka_supporters    MATERIALIZED VIEW     �   CREATE MATERIALIZED VIEW public.charaka_supporters AS
 SELECT users.email
   FROM public.users
  WHERE ('CHARAKA'::text = ANY (users.supported_teams))
  WITH NO DATA;
 2   DROP MATERIALIZED VIEW public.charaka_supporters;
       public         heap    milan    false    214    214    5            �            1259    16424    events    TABLE     �   CREATE TABLE public.events (
    event_id integer NOT NULL,
    event_name character varying(255),
    event_type character varying(255),
    club character varying(255)
);
    DROP TABLE public.events;
       public         heap    milan    false    5            �            1259    16429    events_event_id_seq    SEQUENCE     �   ALTER TABLE public.events ALTER COLUMN event_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.events_event_id_seq
    START WITH 0
    INCREMENT BY 1
    MINVALUE 0
    MAXVALUE 100
    CACHE 1
);
            public          milan    false    5    220            �            1259    16430    gargi_supporters    MATERIALIZED VIEW     �   CREATE MATERIALIZED VIEW public.gargi_supporters AS
 SELECT users.email
   FROM public.users
  WHERE ('GARGI'::text = ANY (users.supported_teams))
  WITH NO DATA;
 0   DROP MATERIALIZED VIEW public.gargi_supporters;
       public         heap    milan    false    214    214    5            �            1259    16434    kalam_supporters    MATERIALIZED VIEW     �   CREATE MATERIALIZED VIEW public.kalam_supporters AS
 SELECT users.email
   FROM public.users
  WHERE ('Kalam'::text = ANY (users.supported_teams))
  WITH NO DATA;
 0   DROP MATERIALIZED VIEW public.kalam_supporters;
       public         heap    milan    false    214    214    5            �            1259    16438    kapila_supporters    MATERIALIZED VIEW     �   CREATE MATERIALIZED VIEW public.kapila_supporters AS
 SELECT users.email
   FROM public.users
  WHERE ('KAPILA'::text = ANY (users.supported_teams))
  WITH NO DATA;
 1   DROP MATERIALIZED VIEW public.kapila_supporters;
       public         heap    milan    false    214    214    5            �            1259    16442    kautilya_supporters    MATERIALIZED VIEW     �   CREATE MATERIALIZED VIEW public.kautilya_supporters AS
 SELECT users.email
   FROM public.users
  WHERE ('KAUTILYA'::text = ANY (users.supported_teams))
  WITH NO DATA;
 3   DROP MATERIALIZED VIEW public.kautilya_supporters;
       public         heap    milan    false    214    214    5            �            1259    16446    maitreyi_supporters    MATERIALIZED VIEW     �   CREATE MATERIALIZED VIEW public.maitreyi_supporters AS
 SELECT users.email
   FROM public.users
  WHERE ('MAITREYI'::text = ANY (users.supported_teams))
  WITH NO DATA;
 3   DROP MATERIALIZED VIEW public.maitreyi_supporters;
       public         heap    milan    false    214    214    5            �            1259    16450    prefered_event    TABLE     �   CREATE TABLE public.prefered_event (
    email character varying(255) NOT NULL,
    user_id integer NOT NULL,
    prefered_event_id integer NOT NULL,
    prefered_event_name character varying
);
 "   DROP TABLE public.prefered_event;
       public         heap    milan    false    5            �            1259    16455    raman_supporters    MATERIALIZED VIEW     �   CREATE MATERIALIZED VIEW public.raman_supporters AS
 SELECT users.email
   FROM public.users
  WHERE ('RAMAN'::text = ANY (users.supported_teams))
  WITH NO DATA;
 0   DROP MATERIALIZED VIEW public.raman_supporters;
       public         heap    milan    false    214    214    5            �            1259    16459    ramanuja_supporters    MATERIALIZED VIEW     �   CREATE MATERIALIZED VIEW public.ramanuja_supporters AS
 SELECT users.email
   FROM public.users
  WHERE ('RAMANUJA'::text = ANY (users.supported_teams))
  WITH NO DATA;
 3   DROP MATERIALIZED VIEW public.ramanuja_supporters;
       public         heap    milan    false    214    214    5            �            1259    16463    ramanujan_supporters    MATERIALIZED VIEW     �   CREATE MATERIALIZED VIEW public.ramanujan_supporters AS
 SELECT users.email
   FROM public.users
  WHERE ('RAMANUJAN'::text = ANY (users.supported_teams))
  WITH NO DATA;
 4   DROP MATERIALIZED VIEW public.ramanujan_supporters;
       public         heap    milan    false    214    214    5            �            1259    16467    sarabhai_supporters    MATERIALIZED VIEW     �   CREATE MATERIALIZED VIEW public.sarabhai_supporters AS
 SELECT users.email
   FROM public.users
  WHERE ('Sarabhai'::text = ANY (users.supported_teams))
  WITH NO DATA;
 3   DROP MATERIALIZED VIEW public.sarabhai_supporters;
       public         heap    milan    false    214    214    5            �            1259    16471    supporting_teams    TABLE     �   CREATE TABLE public.supporting_teams (
    user_id integer NOT NULL,
    email character varying(255) NOT NULL,
    supporting_team integer NOT NULL,
    supporting_team_name text
);
 $   DROP TABLE public.supporting_teams;
       public         heap    milan    false    5            �            1259    16476    susruta_supporters    MATERIALIZED VIEW     �   CREATE MATERIALIZED VIEW public.susruta_supporters AS
 SELECT users.email
   FROM public.users
  WHERE ('SUSRUTA'::text = ANY (users.supported_teams))
  WITH NO DATA;
 2   DROP MATERIALIZED VIEW public.susruta_supporters;
       public         heap    milan    false    214    214    5            �            1259    16480    teams    TABLE     b   CREATE TABLE public.teams (
    team_id integer NOT NULL,
    team_name character varying(255)
);
    DROP TABLE public.teams;
       public         heap    milan    false    5            �            1259    16483    teams_team_id_seq    SEQUENCE     �   CREATE SEQUENCE public.teams_team_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.teams_team_id_seq;
       public          milan    false    5    234            �           0    0    teams_team_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.teams_team_id_seq OWNED BY public.teams.team_id;
          public          milan    false    235            �            1259    16484    users_user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.users_user_id_seq;
       public          milan    false    5    214            �           0    0    users_user_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;
          public          milan    false    236            �            1259    16485    varahamihira_supporters    MATERIALIZED VIEW     �   CREATE MATERIALIZED VIEW public.varahamihira_supporters AS
 SELECT users.email
   FROM public.users
  WHERE ('VARAHAMIHIRA'::text = ANY (users.supported_teams))
  WITH NO DATA;
 7   DROP MATERIALIZED VIEW public.varahamihira_supporters;
       public         heap    milan    false    214    214    5            �            1259    16489    visvesvaraya_supporters    MATERIALIZED VIEW     �   CREATE MATERIALIZED VIEW public.visvesvaraya_supporters AS
 SELECT users.email
   FROM public.users
  WHERE ('Visvesvaraya'::text = ANY (users.supported_teams))
  WITH NO DATA;
 7   DROP MATERIALIZED VIEW public.visvesvaraya_supporters;
       public         heap    milan    false    214    214    5            �            1259    16493    vyasa_supporters    MATERIALIZED VIEW     �   CREATE MATERIALIZED VIEW public.vyasa_supporters AS
 SELECT users.email
   FROM public.users
  WHERE ('VYASA'::text = ANY (users.supported_teams))
  WITH NO DATA;
 0   DROP MATERIALIZED VIEW public.vyasa_supporters;
       public         heap    milan    false    214    214    5                       2604    16497    teams team_id    DEFAULT     n   ALTER TABLE ONLY public.teams ALTER COLUMN team_id SET DEFAULT nextval('public.teams_team_id_seq'::regclass);
 <   ALTER TABLE public.teams ALTER COLUMN team_id DROP DEFAULT;
       public          milan    false    235    234                       2604    16498    users user_id    DEFAULT     n   ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);
 <   ALTER TABLE public.users ALTER COLUMN user_id DROP DEFAULT;
       public          milan    false    236    214            �          0    16597    admin 
   TABLE DATA           =   COPY public.admin (user_id, email, display_name) FROM stdin;
    public          milan    false    240   �Y       �          0    16424    events 
   TABLE DATA           H   COPY public.events (event_id, event_name, event_type, club) FROM stdin;
    public          milan    false    220   ~Z       �          0    16450    prefered_event 
   TABLE DATA           `   COPY public.prefered_event (email, user_id, prefered_event_id, prefered_event_name) FROM stdin;
    public          milan    false    227   �]       �          0    16471    supporting_teams 
   TABLE DATA           a   COPY public.supporting_teams (user_id, email, supporting_team, supporting_team_name) FROM stdin;
    public          milan    false    232    `       �          0    16480    teams 
   TABLE DATA           3   COPY public.teams (team_id, team_name) FROM stdin;
    public          milan    false    234   �`       �          0    16397    users 
   TABLE DATA           }   COPY public.users (user_id, google_id, email, display_name, avatar_url, created_at, updated_at, supported_teams) FROM stdin;
    public          milan    false    214   �a       �           0    0    events_event_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.events_event_id_seq', 50, true);
          public          milan    false    221            �           0    0    teams_team_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.teams_team_id_seq', 18, true);
          public          milan    false    235            �           0    0    users_user_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.users_user_id_seq', 1, false);
          public          milan    false    236            #           2606    16603    admin admin_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.admin
    ADD CONSTRAINT admin_pkey PRIMARY KEY (user_id);
 :   ALTER TABLE ONLY public.admin DROP CONSTRAINT admin_pkey;
       public            milan    false    240                       2606    16500    events events_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.events
    ADD CONSTRAINT events_pkey PRIMARY KEY (event_id);
 <   ALTER TABLE ONLY public.events DROP CONSTRAINT events_pkey;
       public            milan    false    220                       2606    16502 "   prefered_event prefered_event_pkey 
   CONSTRAINT        ALTER TABLE ONLY public.prefered_event
    ADD CONSTRAINT prefered_event_pkey PRIMARY KEY (email, user_id, prefered_event_id);
 L   ALTER TABLE ONLY public.prefered_event DROP CONSTRAINT prefered_event_pkey;
       public            milan    false    227    227    227                       2606    16504 &   supporting_teams supporting_teams_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.supporting_teams
    ADD CONSTRAINT supporting_teams_pkey PRIMARY KEY (user_id, supporting_team, email);
 P   ALTER TABLE ONLY public.supporting_teams DROP CONSTRAINT supporting_teams_pkey;
       public            milan    false    232    232    232                       2606    16506    teams teams_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.teams
    ADD CONSTRAINT teams_pkey PRIMARY KEY (team_id);
 :   ALTER TABLE ONLY public.teams DROP CONSTRAINT teams_pkey;
       public            milan    false    234            !           2606    16508    teams teams_team_name_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public.teams
    ADD CONSTRAINT teams_team_name_key UNIQUE (team_name);
 C   ALTER TABLE ONLY public.teams DROP CONSTRAINT teams_team_name_key;
       public            milan    false    234                       2606    16510    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            milan    false    214                       2606    16512    users users_google_id_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_google_id_key UNIQUE (google_id);
 C   ALTER TABLE ONLY public.users DROP CONSTRAINT users_google_id_key;
       public            milan    false    214                       2606    16514    users users_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            milan    false    214            $           2606    16515    prefered_event event_constarint    FK CONSTRAINT     �   ALTER TABLE ONLY public.prefered_event
    ADD CONSTRAINT event_constarint FOREIGN KEY (prefered_event_id) REFERENCES public.events(event_id) NOT VALID;
 I   ALTER TABLE ONLY public.prefered_event DROP CONSTRAINT event_constarint;
       public          milan    false    3097    227    220            &           2606    16520 6   supporting_teams supporting_teams_supporting_team_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.supporting_teams
    ADD CONSTRAINT supporting_teams_supporting_team_fkey FOREIGN KEY (supporting_team) REFERENCES public.teams(team_id);
 `   ALTER TABLE ONLY public.supporting_teams DROP CONSTRAINT supporting_teams_supporting_team_fkey;
       public          milan    false    232    3103    234            '           2606    16525     supporting_teams user_constarint    FK CONSTRAINT     �   ALTER TABLE ONLY public.supporting_teams
    ADD CONSTRAINT user_constarint FOREIGN KEY (user_id) REFERENCES public.users(user_id) NOT VALID;
 J   ALTER TABLE ONLY public.supporting_teams DROP CONSTRAINT user_constarint;
       public          milan    false    232    3095    214            %           2606    16530    prefered_event user_constraint    FK CONSTRAINT     �   ALTER TABLE ONLY public.prefered_event
    ADD CONSTRAINT user_constraint FOREIGN KEY (user_id) REFERENCES public.users(user_id);
 H   ALTER TABLE ONLY public.prefered_event DROP CONSTRAINT user_constraint;
       public          milan    false    214    227    3095            �           0    16404    aryabhatta_supporters    MATERIALIZED VIEW DATA     8   REFRESH MATERIALIZED VIEW public.aryabhatta_supporters;
          public          milan    false    215    3300            �           0    16408    bhabha_supporters    MATERIALIZED VIEW DATA     4   REFRESH MATERIALIZED VIEW public.bhabha_supporters;
          public          milan    false    216    3300            �           0    16412    bhaskara_supporters    MATERIALIZED VIEW DATA     6   REFRESH MATERIALIZED VIEW public.bhaskara_supporters;
          public          milan    false    217    3300            �           0    16416    brahmagupta_supporters    MATERIALIZED VIEW DATA     9   REFRESH MATERIALIZED VIEW public.brahmagupta_supporters;
          public          milan    false    218    3300            �           0    16420    charaka_supporters    MATERIALIZED VIEW DATA     5   REFRESH MATERIALIZED VIEW public.charaka_supporters;
          public          milan    false    219    3300            �           0    16430    gargi_supporters    MATERIALIZED VIEW DATA     3   REFRESH MATERIALIZED VIEW public.gargi_supporters;
          public          milan    false    222    3300            �           0    16434    kalam_supporters    MATERIALIZED VIEW DATA     3   REFRESH MATERIALIZED VIEW public.kalam_supporters;
          public          milan    false    223    3300            �           0    16438    kapila_supporters    MATERIALIZED VIEW DATA     4   REFRESH MATERIALIZED VIEW public.kapila_supporters;
          public          milan    false    224    3300            �           0    16442    kautilya_supporters    MATERIALIZED VIEW DATA     6   REFRESH MATERIALIZED VIEW public.kautilya_supporters;
          public          milan    false    225    3300            �           0    16446    maitreyi_supporters    MATERIALIZED VIEW DATA     6   REFRESH MATERIALIZED VIEW public.maitreyi_supporters;
          public          milan    false    226    3300            �           0    16455    raman_supporters    MATERIALIZED VIEW DATA     3   REFRESH MATERIALIZED VIEW public.raman_supporters;
          public          milan    false    228    3300            �           0    16459    ramanuja_supporters    MATERIALIZED VIEW DATA     6   REFRESH MATERIALIZED VIEW public.ramanuja_supporters;
          public          milan    false    229    3300            �           0    16463    ramanujan_supporters    MATERIALIZED VIEW DATA     7   REFRESH MATERIALIZED VIEW public.ramanujan_supporters;
          public          milan    false    230    3300            �           0    16467    sarabhai_supporters    MATERIALIZED VIEW DATA     6   REFRESH MATERIALIZED VIEW public.sarabhai_supporters;
          public          milan    false    231    3300            �           0    16476    susruta_supporters    MATERIALIZED VIEW DATA     5   REFRESH MATERIALIZED VIEW public.susruta_supporters;
          public          milan    false    233    3300            �           0    16485    varahamihira_supporters    MATERIALIZED VIEW DATA     :   REFRESH MATERIALIZED VIEW public.varahamihira_supporters;
          public          milan    false    237    3300            �           0    16489    visvesvaraya_supporters    MATERIALIZED VIEW DATA     :   REFRESH MATERIALIZED VIEW public.visvesvaraya_supporters;
          public          milan    false    238    3300            �           0    16493    vyasa_supporters    MATERIALIZED VIEW DATA     3   REFRESH MATERIALIZED VIEW public.vyasa_supporters;
          public          milan    false    239    3300            �   �   x�u̽�0���)�-6��Iat9��{�	ԁ��#1��|~�oF�¦0f����$�d�-��{�=9���Pb`k��n�uA0���Vaq���ߠ�%c�F�1�T��ק<���������
��l���?3      �     x��TMs�F=�����$��SH2��l�x�j��KK3�)F��|Ԇ���pb$�T����x���F���d5,��ɣ����Ad�%K2w���n�蔬�iu4ѐ{�(`�ek�$o�]���ؠTI����Q���T�ӥs��c�yS�R�����|{)�;�V˲����@�����H�Ag�dq(�W��*1�/e�e���w�f�e�#��}]d�zwk����U�����<���zR��g�Vn�m��?�EN�WR���I�,����-�6�EvD�C.t�3Zd9̫e��d\�D�V*s��E�����ײN.^y�������|�h��l3��v�K�9��.������`�:���9 �� }}�l���U���a��l
���"o9���¤"�q�8�Q�c��0l��[-�<�\��Nx���,I�C���{��U�)^��?��OJK���M��U�:����tU�G��ѓ3�|OT���xt�h��l<��ZN��|B�
ۑN<o�t�Tu�x�"�ړȧ���3�l�Ş��6�s�`�W��as魬�U-�|5���7G�c/�����$�y_H��N���O�Ǹ�m���-�;j�����kM��Ř��c�>�ߚ(��c�r�5O�S��}|!�E1��"��Ι0��`���{��|%���Dk���Om:ׇ��S5c�ݠQ�Q���Ƞ�'4��aQ��F�>'��:�o��h���v�)�	,�z�����j�G0���S��)�OX1��n�ؔ
{�n��~ԃ�K��/��!��
4
      �   f  x���Mo�0��̯�m�����ڦ+
����.�ж�%O�Q�ߏ���I3���C���W},ˠ�F�(�.����� e� a����f������	F?�I9��7<Y�5�[J4���p�ꍚg\�ƨ��~�j��r�k�Z���H��V#�r9���I��V^W�"��T���68��	�:��n�,���xT�j>䤀G,���/��Q�;��I�^����G�ǯG�8�|S ��u���\ۑ�A�<\��0Q��$-�&Y�)Dp����(�=J�ùc�E���A4���V��{|�v��ȡT�y�aS<�j/��V��J��u]��x�	r����ēw��OC��M���G�±$����Ӧ-n��.��Z	��v�M=��q�)o�V,`��>��:��_(�����w�S�hl�Œ�������ׁ�}-j� A}��U�ъ�(����Em�����c���ݹ���ܞ�2\$����U:�ǒ+@��^��5�IT��~B8�D�d��Kk;�䂪�ӵq�2��_�ߑ��:c�$��bh���Ƕ����F6_:W5����l�`��#      �   �   x����n�0���c�wm���Cz� +v��
��*�ޟfG�m/�����Ȭ�����C�
1a�p�X(�Zo)�'�����3T�[�t�Z"&�5��(�/��m�cDA��B��<V����P�B�҄�r�DQ�q�~�~b6������b��*#r�i������)삹?]���&�����|4J����,      �   �   x�=��
�0D��ǔ*{���I	��o࿯B���h{3B��C���L$��i�p{9m1���ԃG�w�<N=�����h��4ǭ)?("�S�`�S*)ÈP5�CP�f"Նd��ݳ�GkFc,%��p�2_!�X���.��?o��:�A`      �   �  x���Yo�X������n���y@j��a����l06؆ ��｝�!����Z"�lG�_�>k-M��`D�ZcĹ�Bk����!�ı]��?{^�捝��L��r��(�&�!.|��4�	Í�b'�� q�$o����{�h7F����}�E�9��zn�&��5�7��a�ȗ�Z��s�_�9;C�9�rXg�.`U�8�{8���S�Tc��\(I%"�#EYƼ��%�y�7������p�l����n�.�Q�Y;�ڢ4n1֤�>���z�������ay�?c�5�0E ��HH!���pF	!�w�|������q�>�u��t���Ҫ^"�*5��ꌟg�y�v��p�	��,��
L���$�� #,e)�1�đ�5����!�W�C׸�3P��W-�����%����ں�����t�Z���>�5��@��y�>��"4=4X�(�J��H	�1K��5��8����k�?��wH�
��}�9��rjq뢆j����L�n�E�Vu��W�÷;(�,�R544NO`������P���cL3���\���;�4cd�f��I���ws6��>~&������r�8(Zş&�����������~���?�}P����X!��?"c��a��ߛ�������II���0Wm�n��z�w{�ɒ��9���3-P}i���"�翎�/������˿}cJ	��3&	�O8�qE2�c��o�fw�<� (��e���L�x;�j���<�_xq|r���fWUg:9��Ϊ���V�e�/�q���'���y�I]��K�>�c�bR
�<���<�n�9ϼ�F�RD�~J9f�Ç�������3���bcS
�������㽧�e�k�b��&7�.:hS߈�|�UI�p���`��ւ��Hq!�5�8�_[�����?�m�g��>�;M;�&e���y�:�ae���T:sG5��j8)E��|<�d��"��T��A���J�B�`J��P�HA��T�{�St5&��l���O���x�A���ϳuTo+^N��P:X��\�{�P�-�&��,S��<e�8]J�$�$C��Ғj��~m�f�ȋ� ��z�Z���vW�C��Z6ǮӭD˫=z#�h����4��Q�G(�
4�$O���� %�i���SM~&�C�2}���+S�I'��ץ�o�í7����bm��v�3ךߙ�_���/~%
0���G��t��� �4�D	�� I3�حMp����D���<��I8,��A5f�	�>[��������L�k,�Y�3��b�|R "O�1�P���*2'Tj
�JC���d����Ԯv�b2z�5�֠9lt��I�3l>#�|~��F�2�c�z�䶧U5lt�+��O�A���u��/���xz����) l�H݂A�Q)4<���"�N�(����]�xgg��^y���D�d�$�ZG��)܆��AKMJ�e�ݸ���G�`������)��Dr���肇�� �秫w��\��G�:�g���;��-��M��lF�N��vt��C��Mո�.3S+���02e
zrZ8�z8O�aJH�JϚ��&�b���#��n�:f�+߀H��f��q��=W��f�R�����m�PҞ��E�ڌ����4=�,}������KL��'*��"i%� D�3�%x{�[�?�� �$\��B��3+8j�O��1���Z��5g�I��&���D��jn�Ɨ���	j0%E�ȇ�T6Bq
ŅdZ2�5�;�]������x�xa�N�zyYO��.Ƚ�ˬ���S�oN#�uWni�>ݸy�EQ�|,�����8Nł^A(X O��� �&�B��:�gp�Rg�����j���^t\n���w��ȝ�~Ԛ��۹���������}2��:Ry������C�.̕d��J�~RXB����{�&��L܍��F�	��_�0v�g����-w��d:�7VoVS�L]׷�ڮ�TîMf_���.�#�΁���o���[�     