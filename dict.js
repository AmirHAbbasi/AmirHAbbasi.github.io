const dictionaries = {

'per' : ["�������� ����� ����� | �����",
	"�������� ����� �����",
	"����� ��",
	"�����",
	"������� ����",
	"����� ��� ������ �����",
	"����� ��� �����",
	"���� �� � ������ ��������",
	"����",
	"��ј",
	"��� ��� ��ј",
	alphabet[1],
	"�������� ����",
	"����� ����",
	"����",
	alphabet[1]+alphabet[3]+alphabet[9]+alphabet[5],
	alphabet[2],
	"���Ԑ�� ��� � ���� �����",
	"������ �������",
	"��������",
	alphabet[1]+alphabet[4]+alphabet[0]+alphabet[1],  
	"���� �� ���� ������ ���� �� ���Ԑ�� �� ���"+alphabet[1]+alphabet[3]+alphabet[9]+alphabet[6],
	"������� ����� � ���ј� �� ����",
	"����� ����� ���� ���� ��� ��� ��� ����� �� ���� ��� ��� ��Ș (Scrum)",
	"������ � ��������� ���� (�� �� ���)",
	"���� �����ǁ (���)",
	"��� ��� ����� � ����� � ����� �� ������� � ������� �� �������� �����",
	"����� ���� � ���� �� ������� �� ����� ANTLR ���� ������",
	"����� � ���� ��� ������ �� ������� �� ����� ANTLR ���� ����� ���� � GUI",
	"����� ��� ����� �� ������� �� ����� Behave � ��� ��� BDD",
	"������ �� ���� ���� �Ș� �� ������� �� ����� Cisco Packet Tracer",
	"��� ����� � Web Scrapping �� ������� �� ������",
	"����� �Ș� ������ ���ʘ� SNMP � �������� � net-snmp",
	"������ ����� AVR ATMEGA32 (����� � ��)",
	"����� � ����� ���� ������� ����� �� ���� �����",
	"���� ���� ���� ����� �� ������� �� ModelSim � Proteus (���)",
	"����� ���� �� ������ ����� VHDL � Verilog ���� ����� ����� ��� �������",
	"������ �� Raspberry � Arduino",
	"����� ��� �� ������ ����� SQL(SQlite) � ������� �� ����� Microsoft SQL Server",
	"������ �� ��� ��� ����� ����",
	"����� ��� �� ����� �Ș� ��� �����ϐ�� � ��ϐ��� ����� (�� ������� �� �������� ��� Numpy � Tensorflow �� ������)",
	"���� �� �� ������ ����� ������� �����",
	"����� ��� �� ������� �� �������� ����� �����",
	"�������",
	"���� ����",
	"��� ������",
	"����� ����",
	"��� ����� � ����� ����",
	"����� ��� �Ș�",
	"����� ��� �����",
	"������� � ����� �����",
	"����� ��� �����",
	"���",
	"��������",
	"��� �����ϐ�",
	"����� �����",
	"����� ����",
	alphabet[2]+" ��� "+alphabet[1]+alphabet[3]+alphabet[7]+alphabet[7],
	"���� �����",
	"�����",
	"���",
	"�����",
	"�����",
	"�������",
	"����",
	"������",
	"����",
	"�������",
	"�����",
	"���� ��",
	"���� �����",
	"�����",
	"������",
	"����",
	"++C #C",
	alphabet[9]+alphabet[8]+alphabet[4],
	"�������",
	"����� � ���� ��� ������ �� ������� �� ����� ANTLR ���� ����� ���� � GUI",
	"�������� ����� �����",
	"������ ����� ��/ǁ�����",
	"���� �� � ������ ��������",
	],

'ar':   ["��������� ������� ����� | ���� �������",
	"��������� ������� �����",
	"������",
	"���� �������",
	"������� �����",
	"������ �������",
	"������ �������",
	"������ �������",
	"����",
	"����",
	"��� ������",
	alphabet[1],
	"����� ���� �������ɡ �����",
	"����������",
	"�����",
	alphabet[2]+alphabet[0]+alphabet[1]+alphabet[7],
	"2",
	"����� ����� ������ �������� (IUST)",
	"����� ���������",
	"���������",
	alphabet[2]+alphabet[0]+alphabet[2]+alphabet[2],
	"����� �� �������� �������� ������� (��� "+alphabet[2]+alphabet[0]+alphabet[1]+alphabet[7]+")",
	"��������� �������� �� ������",
	"���� ����� �������� �������� ������� ������ ������� �� ������� (����� SCRUM)",
	"������ ���������� �����",
	"���� �����ǁ",
	"������� ��� ����� ������� ������ �������� ������� ������ ����� ��� ��������",
	"������� ������ ������� �������� ����� ANTLR �������",
	"��� ��� ����� (DSL) �������� ����� ANTLR ������ ������� ��������",
	"��� ����� BDD ����� Python (�������� Behave)",
	"��� ���� ������ ������ �������� ������ Cisco Packet Tracer",
	"���� ����� �� ����� �����(Web Scraping) ������ ����� ����� �������� �����",
	"������ ������ ��� ���� �������� SNMP �������� ����� net-snmp",
	"���� ����� �� ����� AVR ATMEGA32",
	"����� ������ ������� �������� �� ����� �����",
	"���� ����� �� ������ ������� ������� �������� ModelSim � Proteus",
	"���� ����� �� ����� VHDL � Verilog ������ ������� ������",
	"��� ���� Raspberry � Arduino",
	"���� ����� �� Microsoft SQL Server ������ SQL ���������� (SQlite)",
	"��� ���� ��� ����� ��������",
	"���� ����� ������ ����� ���� ������ ������ (�������� Numpy � TensorFlow �� ��� �����)",
	"������� ���������� ������ ��� ����� Linux � Bash",
	"���� ����� �� ������� ������� ������ Linux",
	"�������",
	"���� ��������",
	"������ ���������",
	"���� �������",
	"������� � ����� �������",
	"������ ������",
	"��� ���������",
	"������� � ������� ������",
	"������ ����",
	"����� �����",
	"��������",
	"��� �������",
	"����� �����",
	"����� �������",
	alphabet[3]+" ����� "+alphabet[1]+alphabet[4]+alphabet[1]+alphabet[9]+" ("+""+alphabet[2]+alphabet[3]+" ������ "+alphabet[1]+alphabet[9]+alphabet[9]+alphabet[8]+" �������"+")",
	"����� ������ ����������",
	"���",
	"���",
	"�������",
	"�����",
	"�����",
	"����",
	"�����",
	"java",
	"�������",
	"�����",
	"�����",
	"����",
	"��������",
	"�������",
	"�������",
	"++C #C",
	alphabet[9]+alphabet[8]+alphabet[4],
	"������",
	"��� ��� ����� (DSL) �������� ����� ANTLR ������ ������� ��������",
	"�������� ����� �����",
	"����� ���/�������",
	"������ �������",
	],
'eng' : ["CV | Amirhossein Abbasi", "Amirhossein Abbasi Shahkooh", "Menu", "CV", "Personal Information", "Programming Skills", "Languages Skills","Projects & researches",
	'Field', 'Degree', 'Graduation year', '1', 'Kamal High School, Tehran', 'Mathematics', 'Diploma', '2017', '2',
	 'Iran university of science and technology (IUST)', 'Computer Engineering', 'BSc', '2022', 'rank in Iran national university entrance exam',
	 'Responsibility and cooperation in team', 'Team working by using agile methods to implement software in project (Scrum method)',
	 'Microsoft office softwares and tools (good)', 'Adobe photoshop (good)',
	 'Efficient research methods and search by using online tools and search services', 'Syntax and lexical analysis by using ANTLR tools for Python ',
	 'Design a DSL by using ANTLR tools', 'BDD Software testing for python program (using Behave)',
	 'familiar with Network simulation with Cisco Packet Tracer software', 'A little experience  in Web Scrapping and parsing web pages using python',
	 'Network monitoring based on SNMP protocol using net-snmp library', 'AVR ATMEGA32 programming',
	 'Design and implementation of logic circuit in a real project', 'Logic design simulating by ModelSim and Proteus (good)',
	 'VHDL and Verilog programming (Good) and design digital systems', 'Familiar with Raspberry and Arduino',
	 'Microsoft SQL Server (good) and professional SQL programming (SQlite)', 'Familiar with data analysis methods',
	 'Machine Learning and design self-learning network models (using Numpy and TensorFlow)', 'Linux command script (Professional)',
	 'Linux system calls (Good)','Education', 'Data Science', 'Artificial Intelligence', 'Operating Systems', 'Hardware (Circuit Design)',
	 'Network skills', 'Software Test', 'Compiler and linguistic analysis', 'General Skills', 'First Name', 'Amir Hossein', 'Last Name',
	 'Abbasi Shahkooh', 'Birth date', '23 Nov 1998', 'Email Address', 'No', 'School',
	'Beginner', 'Intermediate', 'Advanced', 'Expert', 'Python', 'Java', 'Elementary', 'Limited', 'Professional',
        'Native', 'Persian', 'English', 'Arabic','C# C++','984','Fields','Design a DSL by using ANTLR tools  ',"Amirhossein Abbasi Shahkooh ","Web/App Programming",],
};
const lang_dir = {
'per' : "rtl",
'eng' : "ltr",
'ar' : "rtl",
};