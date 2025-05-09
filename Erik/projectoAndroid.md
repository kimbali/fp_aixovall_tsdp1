# Andorid amb Material3 XML
## Introducció
- Qué és Android?
    - És un S.O per dispositius mòbil
- Quins arxius son necessaris per construir una aplicacio?
    - AndroidManfiest.xml
        - Exposa les caracteristiques de l'aplicacio
    - Arxius de programació
        - Carpeta kotlin/java
    - Arxius de recursos
        - drawable
        - layout
        - values
            - theme.xml
            - colors.xml
            - strings.xml
    - Arxius de compilacio
        - build.gradle.kts
# Andorid amb Material3 XML
- Configuració bàsica ViewBinding
    - Obrir **build.gradle.kts** de l'app
    - Anar a l'apartat android
    - ``` kts
     viewBinding{
        enable = true
      }
      ```
    - Anar a l'arxiu de codi de la pantalla
    - Posar el codi del ViewBinding
        - Crear variable
        - Inflate
        - SetContentView
- Tipus de layouts
    - ConstreintLayout .
        - Serveix per ubicar els elemnts a la pantalla mitjancant ** constraints**
            1.top
            2.Bootom
            3.start
            4.End
    - LinerLayout .
    - RelativeLayout
    - FrameLayout
    - GridLayout
    - MaterialCardView .
    - Scrolview .
- LinearLayout
    - estructura la infromacio de manera alineada
    - cal  determinar l'orientacio dels elements
        - vertical
        - horitzonatl
    - **No es eficient**
- MaterialCardView
    - Serveix per crear estructures en forma de targeta
    - Propietats importants:
        - cardElevation
        - cardCornerRadius
        - strokeColor
        - StrokeWidth
    - Requereix d'un layout com primerFill(element dintre)
    - ScrollView
        - Serveix per crear un element que permeti lliscar (scroll) a la pantalla
        - Nomes admet un unic fill
            - Aquest fill generalment es un altre layout
    - Components
        - Imageview
            - Per mostrar imatges a la pantalla
        - Textview
            - Per mosrar un text a la pantalla
        - MaterialButton
            - Per crear un boto a la pantalla
            - Tipus:
                - **IconButton**
                    - Crear una icona com un boto
                - **OutlinedButton**
                    - Boto amb vora i sense color de fons(blanc)
        - MaterialcheckBox
            - Crear una clase de seleccio
##Programacio
    - Variables
        - Tipus
            -Val
                - crear variables immutables(no es poden modificar)
            - val
                - Crear variables mutables
    - Bones practiques
        - Utilitzar camel case, la priemera lletra minuscula
        - Utilitzar  noms significatius
        - Evitar l'us  de null
    - Variables primitives
        - String
        - Int
        - Flooat
        - Boolean
        - CHar
        - Double
        - Long
-Classes
    - Es un model (plantilla) per crear objectes i comportament
    - Tipus
        - Class
            -Classe generica
        - Data class
            - Representar model de dades
        - Interface
            - Representa funcions que s'han de programar
        - Enum class
            - Enumerar un conjunt limitat de constants
    - Bones practiques
        - Utilitza camelcase, la primera lletra en mayuscules
        - Nom es singular
        - Ha de tenir exculusivament una responsabilitat
        - Evitar classed de excesivament granss <200 lineas




























