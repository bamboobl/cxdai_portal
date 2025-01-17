package com.cxdai.utils.file;

import java.awt.AlphaComposite;
import java.awt.Graphics2D;
import java.awt.Image;
import java.awt.RenderingHints;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;

import javax.imageio.ImageIO;
import javax.swing.ImageIcon;

import com.sun.image.codec.jpeg.JPEGCodec;
import com.sun.image.codec.jpeg.JPEGImageDecoder;

/**
 * 图片水印
 */
public class ImageMarkLogoByIcon {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		String srcImgPath = "e:/qqq.jpg";
		String iconPath = "e:/watermark.png";
		// String targerPath = "d:/test/michael/img_mark_icon.jpg";
		String targerPath2 = "e:/qqq_rotate2.jpg";
		// 给图片添加水印
		// ImageMarkLogoByIcon.markImageByIcon(iconPath, srcImgPath,
		// targerPath);
		// 给图片添加水印,水印旋转-45
		ImageMarkLogoByIcon.markImageByIcon(iconPath, srcImgPath, targerPath2,
				-45, "JPG");

	}

	/**
	 * 给图片添加水印
	 * 
	 * @param iconPath
	 *            水印图片路径
	 * @param srcImgPath
	 *            源图片路径
	 * @param targerPath
	 *            目标图片路径
	 */
	public static void markImageByIcon(String iconPath, String srcImgPath,
			String targerPath, String formatName) {
		try {
			Image srcImg = ImageIO.read(new File(srcImgPath));
			FileOutputStream targerImgOut = new FileOutputStream(targerPath);
			markImageByIcon(iconPath, srcImg, targerImgOut, null, formatName);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	/**
	 * 给图片添加水印
	 * 
	 * @param iconPath
	 *            水印图片路径
	 * @param srcImgPath
	 *            源图片路径
	 * @param targerPath
	 *            目标图片路径
	 * @param degree
	 *            水印图片旋转角度
	 */
	public static void markImageByIcon(String iconPath, String srcImgPath,
			String targerPath, Integer degree, String formatName) {
		try {
			Image srcImg = ImageIO.read(new File(srcImgPath));
			FileOutputStream targerImgOut = new FileOutputStream(targerPath);
			markImageByIcon(iconPath, srcImg, targerImgOut, degree, formatName);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	/**
	 * 给图片添加水印
	 * 
	 * @param iconPath
	 *            水印图片路径
	 * @param srcImgIn
	 *            源图片文件流
	 * @param targerPath
	 *            目标图片路径
	 * @param degree
	 *            水印图片旋转角度
	 */
	public static void markImageByIcon(String iconPath, InputStream srcImgIn,
			String targerPath, Integer degree, String formatName) {
		try {
			Image srcImg = ImageIO.read(srcImgIn);
			FileOutputStream targerImgOut = new FileOutputStream(targerPath);
			markImageByIcon(iconPath, srcImg, targerImgOut, degree, formatName);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	/**
	 * 给图片添加水印
	 * 
	 * @param iconPath
	 *            水印图片路径
	 * @param srcImgIn
	 *            源图片文件流
	 * @param targerPath
	 *            目标图片路径
	 * @param degree
	 *            水印图片旋转角度
	 * @param targerImgOut
	 *            目标图片输出流
	 */
	public static void markImageByIcon(String iconPath, InputStream srcImgIn,
			String imgsrc, FileOutputStream targerImgOut, Integer degree,
			String formatName) {
		try {
			Image srcImg = null;
			try {
				srcImg = ImageIO.read(srcImgIn);
			} catch (Exception e) {
				File srcImageFileGood = new File(imgsrc);
				JPEGImageDecoder decoder = JPEGCodec
						.createJPEGDecoder(new FileInputStream(imgsrc));
				BufferedImage image = decoder.decodeAsBufferedImage();
				ImageIO.write(image, "jpg", srcImageFileGood);
				srcImg = ImageIO.read(srcImageFileGood);
			}
			markImageByIcon(iconPath, srcImg, targerImgOut, degree, formatName);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	/**
	 * 给图片添加水印、可设置水印图片旋转角度
	 * 
	 * @param iconPath
	 *            水印图片路径
	 * @param srcImgPath
	 *            源图片路径
	 * @param targerPath
	 *            目标图片路径
	 * @param degree
	 *            水印图片旋转角度
	 * @param formatName
	 *            图片格式 如"JPG"
	 */
	private static void markImageByIcon(String iconPath, Image srcImg,
			FileOutputStream targerImgOut, Integer degree, String formatName) {
		try {
			BufferedImage buffImg = new BufferedImage(srcImg.getWidth(null),
					srcImg.getHeight(null), BufferedImage.TYPE_INT_RGB);

			// 得到画笔对象
			// Graphics g= buffImg.getGraphics();
			Graphics2D g = buffImg.createGraphics();

			// 设置对线段的锯齿状边缘处理
			g.setRenderingHint(RenderingHints.KEY_INTERPOLATION,
					RenderingHints.VALUE_INTERPOLATION_BILINEAR);

			g.drawImage(
					srcImg.getScaledInstance(srcImg.getWidth(null),
							srcImg.getHeight(null), Image.SCALE_SMOOTH), 0, 0,
					null);

			if (null != degree) {
				// 设置水印旋转
				g.rotate(Math.toRadians(degree),
						(double) buffImg.getWidth() / 2,
						(double) buffImg.getHeight() / 2);
			}

			// 水印图象的路径 水印一般为gif或者png的，这样可设置透明度
			ImageIcon imgIcon = new ImageIcon(iconPath);

			// 得到Image对象。
			Image img = imgIcon.getImage();

			float alpha = 0.5f; // 透明度
			g.setComposite(AlphaComposite.getInstance(AlphaComposite.SRC_ATOP,
					alpha));

			// 表示水印图片的位置
			g.drawImage(img, -120, 50, null);

			g.setComposite(AlphaComposite.getInstance(AlphaComposite.SRC_OVER));

			g.dispose();

			// 生成图片
			ImageIO.write(buffImg, formatName, targerImgOut);

			System.out.println("图片完成添加Icon印章。。。。。。");
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				if (null != targerImgOut)
					targerImgOut.close();
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}
}