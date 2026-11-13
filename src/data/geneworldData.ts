export interface TechnologyItem {
  id: string;
  index: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  scientificBasis: string;
  appliedAreas: string[];
  keyMolecules: string[];
  accentColor: string;
}

export interface EcosystemItem {
  id: string;
  name: string;
  shortName: string;
  role: string;
  description: string;
  keyHighlights: string[];
  metricLabel: string;
  metricValue: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  subTitle: string;
  description: string;
  target: "b2b" | "b2c" | "both";
  keyTechnology: string;
  ingredients: string[];
  usagePurpose: string;
  volumeOrSpec: string;
  badge?: string;
  featured?: boolean;
}

export interface ArticleItem {
  id: string;
  title: string;
  category: string;
  readTime: string;
  publishYear: string;
  excerpt: string;
  content: string[];
  keyTakeaway: string;
}

export interface MilestoneItem {
  year: string;
  title: string;
  description: string;
}

export const COMPANY_CONFIG = {
  brandName: "GENEWORLD",
  foundedYear: 2009,
  tagline: "Công nghệ sinh học — từ nghiên cứu đến ứng dụng.",
  subTagline:
    "Geneworld kết nối nền tảng khoa học, nghiên cứu và năng lực sản xuất để phát triển các sản phẩm và giải pháp ứng dụng trong những lĩnh vực hoạt động của doanh nghiệp.",
  positioning: "BIOTECHNOLOGY · RESEARCH · MANUFACTURING",
  SHOP_URL: "",
  hotline: "1900 636 496",
  emailContact: "info@geneworld.vn",
  officeCity: "TP. Hồ Chí Minh, Việt Nam",
  facilityLocation: "Khu Công Nghệ Cao TP.HCM (SHTP)",
  greenFarmLocation: "Nông trại sinh học hữu cơ Gen-Green",
  pillars: [
    "Nghiên cứu & Phát triển (R&D)",
    "Phòng thí nghiệm sinh học",
    "Nhà máy sản xuất đạt chuẩn",
    "Nông trại hữu cơ Gen-Green",
    "Sơ chế nguyên liệu & dược liệu",
    "Đào tạo & chuyển giao chuyên môn",
  ],
};

export const CORE_TECHNOLOGIES: TechnologyItem[] = [{id:`stem-cell`,index:`01`,name:`Công nghệ tế bào gốc`,shortDesc:`Ứng dụng môi trường điều hòa và các yếu tố tăng trưởng sinh học trong tái tạo mô và phục hồi tế bào.`,fullDesc:`Geneworld nghiên cứu và làm chủ quy trình phân lập, nuôi cấy và khai thác các hoạt chất sinh học từ môi trường điều hòa tế bào gốc (stem cell conditioned media). Công nghệ này cung cấp nguồn polypeptide, cytokines và các yếu tố tăng trưởng biểu bì tự nhiên, hỗ trợ quá trình sửa chữa cấu trúc mô và tái tạo biểu mô.`,scientificBasis:`Ứng dụng sinh học tế bào, phân lập yếu tố tăng trưởng (EGF, FGF, VEGF) với độ tinh sạch cao.`,appliedAreas:[`Tái tạo và phục hồi mô da`,`Mỹ phẩm sinh học chuyên sâu`,`Dung dịch nuôi cấy chuyên dụng`],keyMolecules:[`EGF (Epidermal Growth Factor)`,`FGF (Fibroblast Growth Factor)`,`Cytokines sinh học`],accentColor:`#006241`},{id:`organic`,index:`02`,name:`Công nghệ Organic`,shortDesc:`Quy trình canh tác sinh học hữu cơ khép kín tại Gen-Green và chiết xuất chuẩn hóa dược liệu sạch.`,fullDesc:`Công nghệ Organic của Geneworld bắt đầu từ vùng nguyên liệu nông trại sinh thái Gen-Green. Quá trình canh tác không thuốc bảo vệ thực vật hóa học kết hợp công nghệ chiết xuất nhiệt độ thấp giúp bảo toàn trọn vẹn hoạt tính của flavonoids, polysaccharides và tinh dầu tự nhiên.`,scientificBasis:`Chuẩn hóa quy trình canh tác hữu cơ vi sinh, chiết xuất siêu tới hạn và chưng cất áp suất thấp.`,appliedAreas:[`Dược mỹ phẩm hữu cơ lành tính`,`Nguyên liệu sinh học sạch`,`Sản phẩm cho da nhạy cảm`],keyMolecules:[`Flavonoids thực vật`,`Axit hữu cơ tự nhiên`,`Polysaccharide bảo vệ da`],accentColor:`#328D6F`},{id:`microbiome`,index:`03`,name:`Công nghệ lên men — Microbiome`,shortDesc:`Khai thác hệ vi sinh vật có lợi và quá trình lên men sinh học để tạo ra các peptide và acid béo sinh học.`,fullDesc:`Hệ vi sinh vật (microbiome) đóng vai trò lá chắn sống cho biểu bì. Geneworld ứng dụng các chủng vi sinh được tuyển chọn nghiêm ngặt qua quy trình lên men sinh học kiểm soát (fermentation biotechnology), tạo ra các postbiotics, acid lactic tự nhiên và chuỗi peptide sinh học hỗ trợ củng cố hàng rào phòng vệ da.`,scientificBasis:`Công nghệ lên men kiểm soát vi khí hậu sinh học, tinh chế phân đoạn postbiotics và peptides.`,appliedAreas:[`Cân bằng hệ vi sinh biểu bì`,`Phục hồi hàng rào màng đáy`,`Kiểm soát viêm da sinh lý`],keyMolecules:[`Postbiotics lên men`,`Lactic Acid sinh học`,`Beta-Glucan sinh khối`],accentColor:`#10B981`},{id:`spirulina`,index:`04`,name:`Công nghệ tảo — Spirulina`,shortDesc:`Nuôi trồng vi tảo Spirulina khép kín và phân tách dưỡng chất chống oxy hóa quang sinh học.`,fullDesc:`Spirulina là nguồn siêu dưỡng chất với hàm lượng Phycocyanin, amino acids thiết yếu và chất chống oxy hóa tự nhiên đậm đặc. Geneworld tự chủ hệ thống nuôi trồng quang sinh học tại nông trại Gen-Green, kiểm soát nguồn nước ngầm tinh khiết và ánh sáng quang phổ tối ưu để phân tách chiết xuất tảo tươi hoạt tính cao.`,scientificBasis:`Quang sinh học tảo vi sinh khép kín (photobioreactor), phân tách Phycocyanin bằng sóng siêu âm.`,appliedAreas:[`Chống oxy hóa tế bào`,`Phục hồi và làm dịu da tức thì`,`Mặt nạ sinh học dưỡng chất`],keyMolecules:[`Phycocyanin quang hoạt tính`,`Axit amin thiết yếu`,`Chlorophyll tự nhiên`],accentColor:`#059669`},{id:`nano`,index:`05`,name:`Công nghệ nano`,shortDesc:`Hệ mang vi nang liposome và hạt nano sinh học giúp tối ưu hóa khả năng hấp thu qua màng tế bào.`,fullDesc:`Nhiều hoạt chất sinh học quý có phân tử lớn và kém bền vững. Công nghệ nano sinh học của Geneworld phát triển các hệ mang vi nang phospholipid (Liposome, Nano-emulsion) với kích thước chỉ từ 50-100nm, giúp bảo vệ hoạt chất khỏi oxy hóa và vận chuyển chính xác đến các tầng tế bào đích.`,scientificBasis:`Công nghệ đồng hóa áp suất cao, bao gói vi nang màng kép phospholipid sinh học tương thích.`,appliedAreas:[`Hệ dẫn truyền hoạt chất chuyên sâu`,`Tăng sinh khả dụng sinh học`,`Dược mỹ phẩm phục hồi tầng sâu`],keyMolecules:[`Phospholipid màng kép`,`Nano-Hyaluronic Acid`,`Phức hợp vi nang hoạt chất`],accentColor:`#1D4ED8`},{id:`prp`,index:`06`,name:`Công nghệ tách chiết PRP`,shortDesc:`Quy trình và bộ kít vô trùng chuẩn y khoa tách chiết huyết tương giàu tiểu cầu nồng độ cao.`,fullDesc:`Huyết tương giàu tiểu cầu (Platelet-Rich Plasma) là công cụ tái tạo mô được ứng dụng rộng rãi trong y khoa và da liễu thẩm mỹ. Geneworld nghiên cứu và sản xuất bộ kít PRP đạt tiêu chuẩn trang thiết bị y tế, với gel phân tách độc quyền giúp thu nhận nồng độ tiểu cầu tối ưu cùng các yếu tố tăng trưởng nội sinh an toàn tuyệt đối.`,scientificBasis:`Cơ chế ly tâm phân tầng mật độ tỷ trọng cao, gel phân tách polymer tương thích sinh học y khoa.`,appliedAreas:[`Cơ sở y tế & bệnh viện chuyên khoa`,`Da liễu phục hồi lâm sàng`,`Liệu trình tái tạo mô chuyên sâu`],keyMolecules:[`PDGF (Platelet-Derived Growth Factor)`,`TGF-β`,`Fibrin mạng lưới sinh học`],accentColor:`#7C3AED`}];

export const ECOSYSTEM_ITEMS: EcosystemItem[] = [{id:`rd`,name:`Nghiên cứu & Phát triển`,shortName:`R&D Sinh học`,role:`Hạt nhân khoa học`,description:`Đội ngũ nhà khoa học, thạc sĩ và kỹ sư công nghệ sinh học liên tục tiến hành sàng lọc chủng vi sinh, mô hình hóa phân tử và tối ưu hóa quy trình chiết xuất.`,keyHighlights:[`Thử nghiệm invitro & invivo`,`Nghiên cứu công thức độc quyền`,`Hợp tác viện nghiên cứu chuyên ngành`],metricLabel:`Số đề tài nghiên cứu`,metricValue:`35+`},{id:`lab`,name:`Phòng thí nghiệm`,shortName:`Laboratory`,role:`Kiểm nghiệm & phân tích`,description:`Hệ thống phòng lab kiểm soát vi sinh, sắc ký phân tích hoạt chất và đo lường độ tinh sạch với trang thiết bị đo quang phổ và hệ thống vô trùng kiểm định nghiêm ngặt.`,keyHighlights:[`Phân tích chỉ tiêu vi sinh`,`Định lượng hoạt chất sinh học`,`Đánh giá độ ổn định lý hóa`],metricLabel:`Kiểm soát chỉ tiêu`,metricValue:`100%`},{id:`factory`,name:`Nhà máy sản xuất`,shortName:`GMP Manufacturing`,role:`Chế tạo & đóng gói`,description:`Cơ sở sản xuất vận hành theo quy trình khép kín, kiểm soát áp suất phòng sạch, hệ thống lọc khí HEPA và dây chuyền tự động hóa từ phối trộn đến chiết rót vô trùng.`,keyHighlights:[`Hệ thống phòng sạch vô trùng`,`Dây chuyền chiết rót tự động`,`Quy trình kiểm soát chất lượng QA/QC`],metricLabel:`Chuẩn quản lý`,metricValue:`ISO / GMP`},{id:`farm`,name:`Nông trại Gen-Green`,shortName:`Nông trại Gen-Green`,role:`Vùng nguyên liệu sạch`,description:`Vùng nông nghiệp sinh thái chuyên canh vi tảo Spirulina và dược liệu hữu cơ, được che chắn khép kín nhằm bảo đảm độ thuần khiết và nguồn hoạt tính tự nhiên cao nhất.`,keyHighlights:[`Canh tác hữu cơ không hóa chất`,`Nuôi trồng quang sinh học tảo tươi`,`Nguồn nước ngầm kiểm định chuẩn`],metricLabel:`Chuẩn canh tác`,metricValue:`Organic vi sinh`},{id:`processing`,name:`Sơ chế & Phát triển dược liệu`,shortName:`Sơ chế nguyên liệu`,role:`Bảo toàn hoạt chất`,description:`Quy trình làm sạch, sấy tầng sôi nhiệt độ thấp, chiết tách phân đoạn và tinh lọc ngay sau thu hoạch giúp giữ lại đến 98% hoạt tính sinh học của nguồn nguyên liệu sạch.`,keyHighlights:[`Chiết tách bảo toàn hoạt tính`,`Sấy nhiệt độ thấp không biến tính`,`Chuẩn hóa hàm lượng hoạt chất`],metricLabel:`Tỷ lệ bảo toàn`,metricValue:`>95%`},{id:`training`,name:`Đào tạo & Chuyển giao`,shortName:`Đào tạo chuyên môn`,role:`Hỗ trợ đối tác chuyên ngành`,description:`Chương trình đào tạo định kỳ dành cho bác sĩ, chuyên viên y tế và đối tác phân phối về cơ chế tác động sinh học, phác đồ ứng dụng và kỹ thuật vận hành trang thiết bị.`,keyHighlights:[`Chuyển giao phác đồ lâm sàng`,`Hội thảo chuyên môn định kỳ`,`Tài liệu hướng dẫn chuẩn y khoa`],metricLabel:`Đối tác được đào tạo`,metricValue:`500+`},{id:`market-research`,name:`Nghiên cứu thị trường`,shortName:`Market Insights`,role:`Định hình xu hướng`,description:`Khảo sát nhu cầu thực tế của bệnh nhân, khách hàng và xu hướng y học tái tạo toàn cầu để định hướng phát triển sản phẩm có tính ứng dụng cao và phù hợp cơ địa người châu Á.`,keyHighlights:[`Phân tích hành vi & nhu cầu da liễu`,`Khảo sát hiệu quả sử dụng thực tế`,`Định hướng sản phẩm chu kỳ mới`],metricLabel:`Dữ liệu khảo sát`,metricValue:`Định kỳ`},{id:`product-dev`,name:`Phát triển sản phẩm ứng dụng`,shortName:`Ứng dụng thực tiễn`,role:`Thương mại hóa nghiên cứu`,description:`Cầu nối trực tiếp chuyển giao các sáng chế từ phòng lab thành các sản phẩm chăm sóc da, phục hồi màng tế bào và kit y tế có thể đưa vào thực tế điều trị và tiêu dùng.`,keyHighlights:[`Tối ưu cảm quan và độ ổn định`,`Thử nghiệm tương thích sinh học`,`Đóng gói bao bì kháng khuẩn`],metricLabel:`Danh mục phát triển`,metricValue:`Đa dạng`}];

export const PRODUCTS: ProductItem[] = [{id:`gw-bio-placenta`,name:`G-M Factor Intensive Serum`,category:`Phục hồi & Tái tạo tế bào`,categorySlug:`recovery`,subTitle:`Huyết thanh tinh khiết giàu phức hợp yếu tố tăng trưởng biểu bì`,description:`Sản phẩm ứng dụng môi trường điều hòa tế bào gốc kết hợp các peptides hoạt tính sinh học cao, hỗ trợ đẩy nhanh chu kỳ tái tạo biểu bì, làm dịu da nhạy cảm sau các liệu trình chuyên sâu.`,target:`both`,keyTechnology:`Công nghệ tế bào gốc & Nano Liposome`,ingredients:[`EGF tinh khiết`,`FGF Complex`,`Sodium Hyaluronate`,`Peptide sinh học`,`Panthenol`],usagePurpose:`Phục hồi cấu trúc da sau điều trị xâm lấn nhẹ, giảm đỏ rát, củng cố hàng rào bảo vệ màng tế bào.`,volumeOrSpec:`Chai thủy tinh 30ml / Hộp 5 ống × 5ml`,badge:`Công nghệ tế bào gốc`,featured:!0},{id:`gw-spirulina-gel`,name:`Spirulina Bio-Active Soothing Gel`,category:`Chống oxy hóa & Dịu da`,categorySlug:`spirulina`,subTitle:`Gel dưỡng ẩm sinh học từ vi tảo Spirulina tươi nông trại Gen-Green`,description:`Chứa hàm lượng cao Phycocyanin tự nhiên chiết xuất từ vi tảo Spirulina nuôi trồng khép kín tại Gen-Green. Cung cấp độ ẩm sâu, trung hòa gốc tự do và tăng cường sức đề kháng tự nhiên cho da.`,target:`b2c`,keyTechnology:`Công nghệ tảo — Spirulina & Organic`,ingredients:[`Chiết xuất vi tảo Spirulina Gen-Green`,`Phycocyanin hoạt tính`,`Chiết xuất nha đam hữu cơ`,`Glycerin thực vật`],usagePurpose:`Cấp ẩm khẩn cấp, làm dịu da kích ứng, kháng oxy hóa tế bào trước tác động ô nhiễm đô thị.`,volumeOrSpec:`Hũ thủy tinh 50g`,badge:`Gen-Green Farm`,featured:!0},{id:`gw-prp-kit`,name:`Bộ Kít Tách Chiết PRP Y Khoa Geneworld`,category:`Trang thiết bị y tế & Cơ sở chuyên khoa`,categorySlug:`clinical`,subTitle:`Quy trình vô trùng khép kín phân tách huyết tương giàu tiểu cầu chuẩn lâm sàng`,description:`Hệ thống ống tách chiết vô trùng chuyên dụng ứng dụng công nghệ gel phân tầng thông minh, giúp thu hoạch nồng độ tiểu cầu gấp 4-6 lần máu ngoại vi mà không làm vỡ tế bào. Sản phẩm dành cho bệnh viện và phòng khám chuyên khoa.`,target:`b2b`,keyTechnology:`Công nghệ tách chiết PRP`,ingredients:[`Gel phân tầng Polymer y tế`,`Hệ đệm chống đông ACD-A vô trùng`,`Ống thủy tinh trung tính khử xạ`],usagePurpose:`Thu nhận huyết tương giàu tiểu cầu ứng dụng trong da liễu tái tạo, trẻ hóa da và phục hồi tổn thương chuyên khoa.`,volumeOrSpec:`Hộp kít tiệt trùng đơn lẻ / Đóng gói y tế`,badge:`Chuyên dụng B2B/Y tế`,featured:!0},{id:`gw-organic-cleanser`,name:`Gen-Green Pure Botanic Cleansing Emulsion`,category:`Dược mỹ phẩm hữu cơ`,categorySlug:`organic`,subTitle:`Nhũ tương làm sạch dịu nhẹ từ dược liệu hữu cơ Gen-Green`,description:`Công thức làm sạch không xà phòng sulfate, kết hợp chiết xuất cúc La Mã và trà xanh từ nông trại hữu cơ Gen-Green, nhẹ nhàng loại bỏ bụi mịn mà vẫn duy trì lớp màng lipid sinh học tự nhiên.`,target:`b2c`,keyTechnology:`Công nghệ Organic & Microbiome`,ingredients:[`Nước cất cúc La Mã hữu cơ`,`Chiết xuất trà xanh Gen-Green`,`Dầu dừa lên men vi sinh`,`Allantoin`],usagePurpose:`Làm sạch sâu dịu nhẹ hàng ngày cho mọi loại da, đặc biệt là da nhạy cảm hoặc đang trong phác đồ phục hồi.`,volumeOrSpec:`Chai vòi nhấn 150ml`,badge:`Chuẩn Organic`,featured:!1},{id:`gw-bio-cellulose-mask`,name:`Bio-Cellulose Stem Barrier Recovery Mask`,category:`Phục hồi & Tái tạo tế bào`,categorySlug:`recovery`,subTitle:`Mặt nạ màng sinh học nano lên men kết hợp dung dịch điều hòa sinh học`,description:`Mặt nạ dệt từ sợi bio-cellulose mỏng nhẹ ôm sát từng đường nét khuôn mặt, đóng vai trò như làn da thứ hai giúp khóa ẩm và dẫn truyền tối đa các hoạt chất EGF cùng dưỡng chất vi tảo sâu vào biểu bì.`,target:`both`,keyTechnology:`Công nghệ lên men — Microbiome & Nano`,ingredients:[`Màng Bio-Cellulose lên men tự nhiên`,`EGF Complex`,`Chiết xuất vi tảo Spirulina`,`Niacinamide sinh học`],usagePurpose:`Cấp cứu làn da mệt mỏi, làm mát tức thì sau laser hoặc ánh sáng xung, phục hồi hàng rào ẩm tự nhiên.`,volumeOrSpec:`Hộp 5 miếng × 25ml`,badge:`Màng sinh học Nano`,featured:!1},{id:`gw-microbiome-barrier-cream`,name:`Microbiome Balance Lipid Barrier Cream`,category:`Chăm sóc màng sinh học`,categorySlug:`skincare`,subTitle:`Kem dưỡng phục hồi lipid và cân bằng hệ vi sinh vật tầng thượng bì`,description:`Sự kết hợp hoàn hảo giữa công nghệ lên men vi sinh và phức hợp ceramides mô phỏng sinh học, giúp xây dựng lại bức tường thành bảo vệ da vững chắc trước vi khuẩn có hại và tác nhân môi trường.`,target:`b2c`,keyTechnology:`Công nghệ lên men — Microbiome & Nano`,ingredients:[`Postbiotics lên men Lactobacillus`,`Ceramide NP/AP/EOP`,`Phytosphingosine`,`Axit béo thực vật hữu cơ`],usagePurpose:`Dưỡng ẩm phục hồi màng bảo vệ, ngăn ngừa tình trạng mất nước qua biểu bì (TEWL), làm dày khỏe da.`,volumeOrSpec:`Hũ thủy tinh chân không 50ml`,badge:`Hệ vi sinh Microbiome`,featured:!1}];

export const ARTICLES: ArticleItem[] = [{id:`art-stem-cell-factors`,title:`Cơ chế kích hoạt tái tạo mô của các yếu tố tăng trưởng sinh học EGF và FGF`,category:`Nghiên cứu sinh học`,readTime:`6 phút`,publishYear:`2026`,excerpt:`Tổng quan cơ chế tế bào học về cách mà môi trường điều hòa nuôi cấy tế bào hỗ trợ tăng sinh nguyên bào sợi và tổng hợp collagen tự nhiên.`,content:[`Trong sinh học biểu mô, các phân tử tín hiệu như EGF (Epidermal Growth Factor) đóng vai trò gắn kết với các thụ thể bề mặt màng tế bào, kích hoạt chuỗi truyền tin nội bào kích thích quá trình phân bào và tăng sinh.`,`Nghiên cứu của Geneworld tập trung vào việc bảo toàn cấu trúc không gian 3 chiều của chuỗi peptide, đảm bảo các yếu tố tăng trưởng giữ nguyên hoạt tính sinh học khi đưa vào dung dịch điều hòa và sản phẩm ứng dụng.`,`Sự kết hợp giữa yếu tố tăng trưởng và hệ vi nang nano liposome cho phép kéo dài thời gian tồn tại của phân tử trong môi trường sinh lý, mang lại hiệu quả tái tạo biểu mô vượt trội cho da sau các can thiệp chuyên sâu.`],keyTakeaway:`Peptide tăng trưởng cần được bảo toàn hoạt tính bằng quy trình tinh chiết lạnh và hệ dẫn truyền tương thích sinh học.`},{id:`art-spirulina-phycocyanin`,title:`Phycocyanin từ vi tảo Spirulina: Hoạt chất chống oxy hóa quang sinh học tự nhiên`,category:`Công nghệ sinh học vi tảo`,readTime:`4 phút`,publishYear:`2026`,excerpt:`Vì sao vi tảo Spirulina nuôi trồng tại Gen-Green sở hữu khả năng dập tắt các gốc tự do mạnh mẽ gấp nhiều lần vitamin C và E thông thường.`,content:[`Phycocyanin là phức hợp sắc tố protein màu lam độc đáo chỉ có trong vi tảo lam Spirulina. Đây là sắc tố quang hợp có khả năng hấp thụ năng lượng ánh sáng và biến đổi thành các electron bảo vệ tế bào khỏi stress oxy hóa.`,`Tại nông trại hữu cơ Gen-Green, Spirulina được nuôi dưỡng trong hệ thống quang sinh học khép kín với nước ngầm tinh khiết và ánh sáng tự nhiên được lọc quang phổ.`,`Nhờ đó, hoạt tính chống oxy hóa của dịch chiết tảo tươi được bảo toàn ở mức tối đa, giúp bảo vệ màng lipid tế bào da khỏi quá trình peroxy hóa do ánh nắng mặt trời và khói bụi.`],keyTakeaway:`Nguồn nuôi trồng hữu cơ khép kín tại chỗ quyết định độ tinh khiết và hoạt tính chống oxy hóa của vi tảo.`},{id:`art-microbiome-barrier`,title:`Hệ vi sinh Microbiome: Bức tường thành sinh học đầu tiên của cơ thể`,category:`Khoa học biểu bì`,readTime:`5 phút`,publishYear:`2026`,excerpt:`Hiểu đúng về vai trò của cân bằng vi sinh vật biểu bì trong việc ngăn chặn viêm nhiễm mạn tính và củng cố chức năng hàng rào bảo vệ màng đáy.`,content:[`Da người là nơi cư trú của hàng tỷ vi sinh vật sống cộng sinh tạo thành hệ vi sinh microbiome biểu bì. Khi hàng rào này mất cân bằng do hóa chất mạnh hoặc ô nhiễm, các hại khuẩn sẽ xâm nhập gây viêm và nhạy cảm.`,`Công nghệ lên men sinh học chọn lọc của Geneworld giúp cung cấp nguồn postbiotics dồi dào, điều hòa độ pH lý tưởng (4.5 - 5.5) và tạo môi trường thuận lợi để lợi khuẩn phát triển.`,`Kết quả là làn da tự phục hồi khả năng đề kháng bẩm sinh, giảm thiểu phụ thuộc vào các hoạt chất kháng sinh hoặc chống viêm nhân tạo.`],keyTakeaway:`Nuôi dưỡng hệ vi sinh vật có lợi là giải pháp nền tảng để có một làn da khỏe mạnh bền vững.`}];

export const MILESTONES: MilestoneItem[] = [{year:`2009`,title:`Khởi đầu từ nền tảng nghiên cứu`,description:`Geneworld được thành lập với mục tiêu trở thành doanh nghiệp công nghệ sinh học tiên phong, tập trung vào phòng thí nghiệm, công nghệ tế bào gốc và các nghiên cứu khoa học ứng dụng.`},{year:`2013`,title:`Mở rộng cơ sở sản xuất & Phòng thí nghiệm`,description:`Xây dựng hệ thống phòng sạch và cơ sở sản xuất đạt chuẩn vô trùng khép kín, phục vụ nghiên cứu và cung ứng dung dịch sinh học chuyên ngành cho các đơn vị chuyên môn.`},{year:`2016`,title:`Thành lập Nông trại hữu cơ Gen-Green`,description:`Đưa nông trại sinh thái Gen-Green vào vận hành thực tế, chủ động nguồn nuôi trồng vi tảo Spirulina và các thảo dược hữu cơ để tinh chế nguyên liệu sinh học chất lượng cao.`},{year:`2019`,title:`Hoàn thiện 6 nền tảng công nghệ sinh học`,description:`Xác lập và chuẩn hóa chuỗi 6 công nghệ cốt lõi: Tế bào gốc, Organic, Lên men - Microbiome, Tảo Spirulina, Nano liposome và kít tách chiết PRP.`},{year:`2026`,title:`Hệ sinh thái công nghệ sinh học thế hệ mới`,description:`Nâng cấp toàn diện chuỗi liên kết R&D — Nhà máy sản xuất — Nông trại Gen-Green — Phân phối ứng dụng, mở rộng hợp tác OEM/ODM quốc tế và thương mại hóa sản phẩm cho người tiêu dùng.`}];

export const B2B_PARTNER_CARDS = [
  {
    id: "medical",
    letter: "A",
    title: "Bệnh viện & Cơ sở y tế",
    subtitle: "Giải pháp sinh học & Y học tái tạo",
    copy: "Tìm hiểu các danh mục và giải pháp liên quan, đồng thời kết nối với bộ phận phụ trách để được cung cấp thông tin phù hợp.",
    cta: "Yêu cầu tư vấn",
    iconName: "hospital",
    highlights: [
      "Bộ kít tách chiết PRP y khoa đạt chuẩn",
      "Dung dịch hoạt hóa & môi trường sinh học",
      "Hồ sơ kỹ thuật & thử nghiệm đạt kiểm định",
    ],
  },
  {
    id: "clinic",
    letter: "B",
    title: "Thẩm mỹ viện & Phòng khám da liễu",
    subtitle: "Dược mỹ phẩm sinh học & Phục hồi tế bào",
    copy: "Khám phá các sản phẩm ứng dụng công nghệ tế bào gốc, tảo Spirulina và chiết xuất hữu cơ tối ưu cho quy trình chăm sóc chuyên sâu.",
    cta: "Nhận danh mục",
    iconName: "sparkles",
    highlights: [
      "Huyết thanh phục hồi tế bào đậm đặc",
      "Gel làm dịu sinh học & màng bọc phân tử",
      "Chính sách cung ứng độc quyền theo cơ sở",
    ],
  },
  {
    id: "oem",
    letter: "C",
    title: "Hợp tác OEM / ODM & Chuyển giao",
    subtitle: "Gia công & Đồng phát triển công thức",
    copy: "Tận dụng dây chuyền sản xuất khép kín và năng lực nghiên cứu tại Lab Geneworld để hiện thực hóa các dòng sản phẩm của đối tác.",
    cta: "Đăng ký kết nối",
    iconName: "building-2",
    highlights: [
      "Tùy biến công thức sinh học độc quyền",
      "Dây chuyền phòng sạch chuẩn quốc tế",
      "Hỗ trợ hoàn thiện hồ sơ công bố chất lượng",
    ],
  },
  {
    id: "distribution",
    letter: "D",
    title: "Nhà phân phối & Đại lý khu vực",
    subtitle: "Mở rộng mạng lưới thị trường",
    copy: "Đồng hành cùng Geneworld để đưa các giải pháp công nghệ sinh học Việt Nam đến tay người tiêu dùng và chuyên gia toàn quốc.",
    cta: "Liên hệ hợp tác",
    iconName: "network",
    highlights: [
      "Chiết khấu phân phối ổn định & minh bạch",
      "Đào tạo kiến thức sản phẩm & chuyển giao",
      "Bảo hộ thị trường khu vực hoạt động",
    ],
  },
];

export const B2B_INQUIRY_TYPES = [
  { id: "oem-odm", label: "OEM / ODM & R&D Sản phẩm" },
  { id: "medical", label: "Bệnh viện & Cơ sở y tế (PRP/Phục hồi)" },
  { id: "distribution", label: "Hợp tác phân phối khu vực" },
  { id: "manufacturing", label: "Năng lực nhà máy & Phòng Lab" },
  { id: "other", label: "Nhu cầu hợp tác khác" },
];

export const FAQ_QUESTIONS = [
  {
    id: "products",
    label: "Khám phá sản phẩm Geneworld",
    iconName: "sparkles",
    answer:
      "Geneworld phát triển các dòng sản phẩm ứng dụng công nghệ tế bào gốc, vi tảo Spirulina nông trại Gen-Green, lên men vi sinh và chiết xuất hữu cơ. Bạn có thể xem toàn bộ danh mục sản phẩm hoặc yêu cầu đặt mua chính hãng.",
    actionLabel: "Xem danh mục sản phẩm",
    targetTab: "products",
  },
  {
    id: "oem",
    label: "Hợp tác OEM / ODM & R&D",
    iconName: "building-2",
    answer:
      "Geneworld cung cấp giải pháp hợp tác trọn gói từ nghiên cứu công thức độc quyền tại R&D, kiểm nghiệm trong phòng thí nghiệm đến gia công sản xuất trên dây chuyền đạt chuẩn và hỗ trợ công bố hồ sơ.",
    actionLabel: "Mở biểu mẫu hợp tác OEM/ODM",
    targetModal: "oem-odm",
  },
  {
    id: "technologies",
    label: "Tìm hiểu 6 công nghệ nền tảng",
    iconName: "flask-conical",
    answer:
      "Sáu trụ cột công nghệ của Geneworld bao gồm: Tế bào gốc, Canh tác & Chiết xuất Organic, Lên men - Microbiome, Vi tảo Spirulina, Nano liposome và kít tách chiết PRP y khoa.",
    actionLabel: "Đến trung tâm công nghệ R&D",
    targetTab: "technology",
  },
  {
    id: "factory",
    label: "Năng lực nhà máy & Phòng Lab",
    iconName: "compass",
    answer:
      "Cơ sở sản xuất khép kín cùng hệ thống phòng kiểm nghiệm vi sinh và sắc ký phân tích giúp Geneworld kiểm soát 100% chất lượng từ nguyên liệu đến thành phẩm.",
    actionLabel: "Xem năng lực nhà máy & Lab",
    targetTab: "manufacturing",
  },
];
